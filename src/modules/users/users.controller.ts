import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestUsername } from './decorators/request-username.decorator';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get('/me')
  async login(@RequestUsername() username: string) {
    return this.userService.findOne(username);
  }
}
