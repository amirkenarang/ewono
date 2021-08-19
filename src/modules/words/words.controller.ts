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
  async create(@Body() createWordDto: WordEntityDto, @Request() req) {
    delete createWordDto._id;
    const word: CreateWordDto = {
      ...createWordDto,
      username: req.user.username,
    };
    const response = await this.wordsService.create(word);
    return response;
  }

  @Get()
  async findAll(@Request() req): Promise<WordEntityDto[]> {
    return this.wordsService.findAll(req.user.username);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.wordsService.findOne(id, req.user.username);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWordDto: UpdateWordDto,
    @Request() req,
  ) {
    return this.wordsService.update(id, req.user.username, updateWordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    return this.wordsService.remove(id, req.user.username);
  }
}
