import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestUsername } from './decorators/request-username.decorator';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/me')
  async userMe(@RequestUsername() username: string): Promise<UserDto> {
    return this.userService.findOne(username);
  }

  @Patch('')
  async update(
    @RequestUsername() username: string,
    @Body() userDto: UpdateUserDto,
  ) {
    return this.userService.update(username, userDto);
  }
}
