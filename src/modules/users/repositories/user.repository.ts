import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../schema/user.schema';
import { UserModel } from '../schema/userModel.interface';

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async findUser(username: string): Promise<UserDto> {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async register(userDto: UserDto): Promise<UserDto> {
    let createdUser: UserDto = await this.userModel.create(userDto);
    return createdUser;
  }

  async update(username: string, userDto: UpdateUserDto): Promise<UserDto> {
    let createdUser = await this.userModel.findOneAndUpdate({
      username,
      userDto,
    });
    return createdUser;
  }
}
