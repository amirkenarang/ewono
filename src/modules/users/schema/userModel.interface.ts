import { Model } from 'mongoose';
import { UserDocument } from './user.schema';

export interface UserModel extends Model<UserDocument> {
  username: string;
  password: string;
  email: string;
  paginate(any): {
    results: any;
    previous: string;
    hasPrevious: boolean;
    next: string;
    hasNext: boolean;
  };
}
