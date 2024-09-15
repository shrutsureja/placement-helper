import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { CreateUserDto } from './dtos/login-signup.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.userService.signUp(createUserDto);
  }

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto, @Res() reply) {
    const data =  await this.userService.login(createUserDto);
    reply.setCookie('access_token', data.access_token, {});
    reply.code(200).send();
  }

  @Get()
  async findAll(@Query('page') query) {
    return await this.userService.findAll(query);
  }
}
