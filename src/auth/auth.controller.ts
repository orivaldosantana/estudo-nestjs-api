import { Controller, Post, Get, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) { 
    console.log({dto, })  
    return this.authService.signup() 
  }

  @Post('signin')
  singin() {
    return this.authService.signin() 
  } 

  @Get('oi') 
  test() {
    return 'oi' 
  }
}