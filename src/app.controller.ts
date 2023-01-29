import {
  Controller,
  Get,
  Redirect,
  Query,
  Header,
  Post,
  Body,
  Param,
  UsePipes,
  Request,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from 'src/user/dtos/User.dto';
import { UserService } from './user/user.service';
import { type } from 'os';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @Redirect('https://nestjs.com', 301)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/find')
  findAll(): string {
    return 'This action returns all cats ';
  }
  @Get('/pat*tern')
  patter(): string {
    return 'Pattern based route... (Route Wildcards)';
  }

  @Post('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('/header')
  @Header('Cache-Control', 'none')
  setHeader() {
    return 'setting header from controller...';
  }

  @Get('/user/:name')
  getName(@Param() prm) {
    console.log(prm.name);
    return `Username is ${prm.name}`;
  }

  @Get('/userRef/:name')
  getNameByRef(@Param('name') name: string) {
    console.log(name);
    return `Mr. ${name}`;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
