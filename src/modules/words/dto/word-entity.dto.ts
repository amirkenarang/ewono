export class WordEntityDto {
  username: string;
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
