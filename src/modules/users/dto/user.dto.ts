import { classToPlain, Exclude, Expose } from 'class-transformer';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { LanguageEnum } from '../enum/language.enum';
import { Types } from 'mongoose';

export class BaseDBObject {
  @Expose()
  @IsOptional()
  @Transform((value: any) => {
    if (value.value && 'value' in value) {
      return value.value instanceof Types.ObjectId
        ? value.value.toHexString()
        : value.value.toString();
    }
    return value.value || null;
  })
  _id: string;

  @Exclude()
  @IsOptional()
  __v: any;

  toJSON() {
    return classToPlain(this);
  }
}

@Exclude()
export class UserDto extends BaseDBObject {
  password: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  cellNo: string;

  @Expose()
  avatar: string;

  @Expose()
  language: LanguageEnum;

  constructor(partial: Partial<UserDto>) {
    super();
    Object.assign(this, partial);
  }
}
