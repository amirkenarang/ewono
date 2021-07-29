import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get('/me')
  async login(@Request() req) {
    return this.userService.findOne(req.user.username);
  }
}
