import { Injectable } from '@nestjs/common';
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
}
