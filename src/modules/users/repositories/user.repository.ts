import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { UserModel } from '../schema/userModel.interface';

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async findUser(username: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).lean();
    return user;
  }
}
