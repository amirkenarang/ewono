import { ObjectId } from 'mongoose';

export class WordEntityDto {
  _id: ObjectId;
  username: string;
  word: string;
  translate: [string];
  example: [string];
  description: string;
  synonym: [string];
  antonym: [string];
  isNoun: boolean;
  isVerb: boolean;
  isAdjective: boolean;
  isAdverb: boolean;
  isFormal: boolean;
  isIdiom: boolean;
  isCountable: boolean;
}
