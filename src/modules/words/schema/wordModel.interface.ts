import { Model } from 'mongoose';
import { WordDocument } from './word.schema';

export interface WordModel extends Model<WordDocument> {
  _id: string;
  user: string;
  word: string;
  translate: string;
  example: string;
  description: string;
  synonym: string;
  antonym: string;
  isNoun: boolean;
  isVerb: boolean;
  isAdjective: boolean;
  isAdverb: boolean;
  isFormal: boolean;
  isIdiom: boolean;
  isCountable: boolean;
  paginate(any): {
    results: any;
    previous: string;
    hasPrevious: boolean;
    next: string;
    hasNext: boolean;
  };
}
