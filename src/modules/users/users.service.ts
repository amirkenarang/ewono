import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repositories/user.repository';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(private userRepository: UserRepository) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findUser(username);
    return user;
  }

  async register(userDto: UserDto): Promise<UserDto> {
    let user = await this.userRepository.register(userDto);
    return user;
  }
}
