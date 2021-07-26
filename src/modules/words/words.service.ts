import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { WordEntityDto } from './dto/word-entity.dto';
import { WordRepository } from './repositories/word.repository';

@Injectable()
export class WordsService {
  constructor(private wordRepository: WordRepository) {}

  async create(createWordDto: CreateWordDto) {
    const word = await this.wordRepository.create(createWordDto);
    return word;
  }

  async findAll(username: string): Promise<WordEntityDto[]> {
    const words = await this.wordRepository.findAll(username);
    return words;
  }

  async findOne(word: string, username: string): Promise<WordEntityDto> {
    const result = await this.wordRepository.findOne(word, username);
    return result;
  }

  async update(word: string, username: string, updateWordDto: UpdateWordDto) {
    await this.wordRepository.update(word, username, updateWordDto);
    return updateWordDto;
  }

  async remove(word: string, username: string): Promise<any> {
    await this.wordRepository.remove(word, username);
    return { response: 'Word Deleted' };
  }
}
