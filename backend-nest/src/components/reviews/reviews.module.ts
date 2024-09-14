import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ReviewRepository } from './reviews.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { DBCollectionNameTokens } from 'src/config';
import { ReviewsSchema } from './reviews.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DBCollectionNameTokens.REVIEW, schema: ReviewsSchema },
    ]),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewRepository],
})
export class ReviewsModule {}
