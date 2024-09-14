import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DBCollectionNameTokens } from 'src/config';
import {
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  UpdateQuery,
} from 'mongoose';
import { Reviews, ReviewsDocument } from './reviews.schema';

const COMMON_ERROR_MESSAGE = 'Oops something went wrong';
@Injectable()
export class ReviewRepository {
  private readonly logger = new Logger(ReviewRepository.name);
  constructor(
    @InjectModel(DBCollectionNameTokens.REVIEW)
    private readonly reviewModel: Model<Reviews>,
  ) {}

  async create(review: Reviews): Promise<ReviewsDocument> {
    try {
      console.log(review);
      return await this.reviewModel.create(review);
    } catch (err) {
      console.log(err);
      this.logger.error({ err }, 'Error while creating review');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

  async updateOne(
    filterQuery: FilterQuery<Reviews>,
    updateQuery: UpdateQuery<Reviews>,
  ): Promise<any> {
    try {
      return await this.reviewModel.findOneAndUpdate(filterQuery, updateQuery, {
        new: true,
      });
    } catch (err) {
      this.logger.error({ err }, 'Error while updating review');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }
}