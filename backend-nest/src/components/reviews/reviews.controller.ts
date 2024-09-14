import { Controller, Post, Body, Logger, Res } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  private readonly logger = new Logger(ReviewsController.name);
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto, @Res() reply) {
    this.logger.log('request received for posting a review');
    const data = await this.reviewsService.create(createReviewDto);
    return reply.code(200).send(data);
  }
}
