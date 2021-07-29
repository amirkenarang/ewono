import { InjectModel } from '@nestjs/mongoose';
import { CreateWordDto } from '../dto/create-word.dto';
import { UpdateWordDto } from '../dto/update-word.dto';
import { WordEntityDto } from '../dto/word-entity.dto';
import { Word } from '../schema/word.schema';
import { WordModel } from '../schema/wordModel.interface';

export class WordRepository {
  constructor(@InjectModel(Word.name) private wordModel: WordModel) {}

  async create(createWordDto: CreateWordDto): Promise<any> {
    const word = await this.wordModel.create(createWordDto);
    return word;
  }

  async findAll(username: string): Promise<WordEntityDto[]> {
    const words = await this.wordModel.find({ username });
    return words;
  }

  async findOne(_id: string, username: string): Promise<WordEntityDto> {
    const result = await this.wordModel.findOne({ _id, username });
    return result;
  }

  async update(
    _id: string,
    username: string,
    updateWordDto: UpdateWordDto,
  ): Promise<any> {
    const result = await this.wordModel.updateOne(
      { _id, username },
      updateWordDto,
    );
    return result;
  }

  async remove(_id: string, username: string): Promise<WordEntityDto> {
    const result = await this.wordModel.remove({ _id, username });
    return result;
  }
}
