import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../users/dto/user.dto';
import { ApiConfigService } from 'src/config/env/ApiConfigService';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly apiConfigService: ApiConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      await this.verifyPassword(user.password, pass);
      user.password = undefined;
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: UserDto) {
    const salt = this.apiConfigService.hashSalt;
    const hashPassword = await bcrypt.hash(userDto.password, salt);
    userDto.password = hashPassword;
    const user = await this.usersService.register(userDto);
    return user;
  }

  private async verifyPassword(userPassword: string, inputPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      inputPassword,
      userPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
