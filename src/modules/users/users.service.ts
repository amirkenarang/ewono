import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findOne(username: string): Promise<UserDto> {
    const user = await this.userRepository.findUser(username);
    return new UserDto(user.toJSON());
  }

  async register(userDto: UserDto): Promise<UserDto> {
    const user = await this.userRepository.register(userDto);
    return new UserDto(user.toJSON());
  }

  async update(username: string, userDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userRepository.update(username, userDto);
    return new UserDto(user.toJSON());
  }
}
