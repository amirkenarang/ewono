import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../dto/user.dto';
import { User } from '../schema/user.schema';
import { UserModel } from '../schema/userModel.interface';

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async findUser(username: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).lean();
    return user;
  }

  async register(userDto: UserDto): Promise<UserDto> {
    let createdUser: UserDto = await this.userModel.create(userDto);
    return createdUser;
  }
}
