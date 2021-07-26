import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WordEntityDto } from './dto/word-entity.dto';

@Controller('/api/v1/word')
@UseGuards(JwtAuthGuard)
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  async create(@Body() createWordDto: CreateWordDto, @Request() req) {
    const word = await this.wordsService.create({
      ...createWordDto,
      username: req.user.username,
    });
    return word;
  }

  @Get()
  async findAll(@Request() req): Promise<WordEntityDto[]> {
    return this.wordsService.findAll(req.user.username);
  }

  @Get(':word')
  async findOne(@Param('word') word: string, @Request() req) {
    return this.wordsService.findOne(word, req.user.username);
  }

  @Patch(':word')
  async update(
    @Param('word') word: string,
    @Body() updateWordDto: UpdateWordDto,
    @Request() req,
  ) {
    return this.wordsService.update(word, req.user.username, updateWordDto);
  }

  @Delete(':word')
  async remove(@Param('word') word: string, @Request() req) {
    return this.wordsService.remove(word, req.user.username);
  }
}
