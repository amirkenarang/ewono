import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WordDocument = Word & Document;

@Schema({ collection: 'words' })
export class Word {
  @Prop({ ref: 'User' })
  username: string;

  @Prop({ required: true })
  word: string;

  @Prop()
  translate: [string];

  @Prop()
  description: string;

  @Prop()
  synonym: [string];

  @Prop()
  antonym: [string];

  @Prop()
  isNoun: boolean;

  @Prop()
  isVerb: boolean;

  @Prop()
  isAdjective: boolean;

  @Prop()
  isAdverb: boolean;

  @Prop()
  isFormal: boolean;

  @Prop()
  isIdiom: boolean;

  @Prop()
  isCountable: boolean;
}
export const WordSchema = SchemaFactory.createForClass(Word);
WordSchema.set('timestamps', true);
