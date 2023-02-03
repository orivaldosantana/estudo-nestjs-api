import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable({}) 
export class AuthService {
  constructor(private prisma: PrismaService) {}
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
      // retorna o usuário cadastrado sem o campo hash 
      delete user.hash 
      return user 
    }
    catch (error) {
      if ( error instanceof PrismaClientKnownRequestError ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken') 
        }
      }

    }
  
  }

  async signin(dto: AuthDto) {
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
    // Retorne os dados do usuário sem o hash 
    delete user.hash
    return user 
  }


}