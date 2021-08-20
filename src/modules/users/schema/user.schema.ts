import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { LanguageEnum } from '../enum/language.enum';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  _id: string;

  @Prop()
  __v: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  cellNo: string;

  @Prop()
  avatar: string;

  @Prop()
  language: LanguageEnum;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('timestamps', true);
