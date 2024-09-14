import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller('college')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Post()
  create(@Body() createCollegeDto) {
    return this.collegeService.create(createCollegeDto);
  }

  @Get()
  findAll() {
    return this.collegeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collegeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollegeDto) {
    return this.collegeService.update(+id, updateCollegeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collegeService.remove(+id);
  }
}
