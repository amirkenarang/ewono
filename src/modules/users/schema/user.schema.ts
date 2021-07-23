import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('timestamps', true);
