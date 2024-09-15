import { Controller, Get, Param, Post, Body, Logger, Res, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../../common/authentication/jwt-auth.guard';

@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewsController {
  private readonly logger = new Logger(ReviewsController.name);
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto, @Res() reply) {
    this.logger.log('request received for posting a review');
    const data = await this.reviewsService.create(createReviewDto);
    return reply.code(200).send(data);
  }

  @Get(':reviewId')
  async getReviewById(@Param('reviewId') reviewId: string) {
    this.logger.log('request received for getting a review');
    return await this.reviewsService.getReviewById(reviewId);
  }

  @Get('/company/:companyId')
  async getReviewByCompanyId(@Param('companyId') companyId) {
    this.logger.log('request received for getting a review by company id');
    return await this.reviewsService.getReviewByCompanyId(companyId);
  }
}
