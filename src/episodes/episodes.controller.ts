import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this.episodesService;
  }

  @Get('featured')
  findFeatured() {
    return 'Featured Episodes';
  }

  @Get(':id')
  findone(@Param() id: string) {
    console.log(id);
    return 'One Episode of id';
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return 'New Episode';
  }
}
