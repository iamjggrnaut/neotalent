import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  async getUser(@Param() email: string) {
    return this.usersService.findOneByEmail(email);
  }
}
