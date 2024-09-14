import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Res,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  private readonly logger = new Logger(ReviewsController.name);
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto, @Res() reply) {
    this.logger.log('request received on the server');
    const data = await this.reviewsService.create(createReviewDto);
    return reply.code(200).send(data);
  }

  @Post('/answer')
  async answer(@Body() question, @Res() reply) {
    this.logger.log('request received on the server');
    const data = await this.reviewsService.getAnswer(question);
    return reply.code(200).send(data);
  }
}
