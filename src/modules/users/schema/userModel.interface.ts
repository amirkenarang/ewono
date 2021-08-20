import { Model, ObjectId } from 'mongoose';
import { LanguageEnum } from '../enum/language.enum';
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
  language: LanguageEnum;
  paginate(any): {
    results: any;
    previous: string;
    hasPrevious: boolean;
    next: string;
    hasNext: boolean;
  };
}
