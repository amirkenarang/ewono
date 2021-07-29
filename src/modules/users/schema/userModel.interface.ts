import { Model, ObjectId } from 'mongoose';
import { UserDocument } from './user.schema';

export interface UserModel extends Model<UserDocument> {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  cellNo: string;
  avatar: string;
  paginate(any): {
    results: any;
    previous: string;
    hasPrevious: boolean;
    next: string;
    hasNext: boolean;
  };
}
