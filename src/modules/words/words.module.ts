import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { WordRepository } from './repositories/word.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from './schema/word.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  controllers: [WordsController],
  providers: [WordsService, WordRepository],
})
export class WordsModule {}
