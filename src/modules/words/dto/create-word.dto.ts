import { IsNotEmpty } from 'class-validator';

export class CreateWordDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
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
}
