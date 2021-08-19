import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WordEntityDto } from './dto/word-entity.dto';
import { RequestUsername } from '../users/decorators/request-username.decorator';

@Controller('/api/v1/word')
@UseGuards(JwtAuthGuard)
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  async create(
    @Body() createWordDto: WordEntityDto,
    @RequestUsername() username: string,
  ) {
    delete createWordDto._id;
    const word: CreateWordDto = {
      ...createWordDto,
      username,
    };
    const response = await this.wordsService.create(word);
    return response;
  }

  @Get()
  async findAll(@RequestUsername() username: string): Promise<WordEntityDto[]> {
    return this.wordsService.findAll(username);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @RequestUsername() username: string) {
    return this.wordsService.findOne(id, username);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWordDto: UpdateWordDto,
    @RequestUsername() username: string,
  ) {
    return this.wordsService.update(id, username, updateWordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @RequestUsername() username: string) {
    return this.wordsService.remove(id, username);
  }
}
