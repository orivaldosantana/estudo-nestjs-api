import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable({}) 
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}
  async signup(dto: AuthDto) {
    // gera um hash para a senha 
    const hash = await argon.hash(dto.password) 
    // salva o novo usuário no banco de dados 
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      })
      // Retorne o token jwt
      return this.signToken(user.id, user.email) 
    }
    catch (error) {
      if ( error instanceof PrismaClientKnownRequestError ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken') 
        }
      }
    }
  }

  async signin(dto: AuthDto): Promise<{}> {
    // Encontre o usuário por email
    const user = await this.prisma.user.findUnique({
      where: {email: dto.email,},
    })
    // Se não existir lance uma exceção
    if (!user) {
      throw new ForbiddenException('Credentials incorrect') 
    }
    // Compare a senha
    const pwMatches = await argon.verify(user.hash,dto.password)
    // Se senha incorreta lance uma exceção
    if (!pwMatches) 
      throw new ForbiddenException('Credentials incorrect') 
    // Retorne o token jwt e dados do usuário 
    const token = await this.signToken(user.id, user.email) 
    return { 
            access_token: token.access_token,
            user : { 
               name: "XXXXX", 
               email: user.email,
            }
         }
    
    
     
  }

  async signToken(userId: number, email: string): Promise<{access_token: string}> {
    const payload = {
      sub: userId,
      email,
    }
    const secret = this.config.get('JWT_SECRET')

    const token = await this.jwt.signAsync(payload, {expiresIn: '30m', secret: secret,})

    return { 
      access_token: token,
    }
  }
  


}
