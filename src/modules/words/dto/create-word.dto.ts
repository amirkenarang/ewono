import { IsNotEmpty } from 'class-validator';

export class CreateWordDto {
  username: string;

  @IsNotEmpty()
  word: string;

  translate: [string];
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
