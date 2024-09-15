import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { DBCollectionNameTokens } from 'src/config';
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
      return await this.reviewModel.create(review);
    } catch (err) {
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

  async findById(reviewId: string): Promise<ReviewsDocument> {
    try {
      return await this.reviewModel.findById(reviewId);
    } catch (err) {
      this.logger.error({ err }, 'Error while fetching review by id');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

  async findByCompanyId(companyId: string): Promise<ReviewsDocument[]> {
    try {
      return await this.reviewModel.find({ companyId }).sort({ updatedAt: -1 });
    } catch (err) {
      this.logger.error({ err }, 'Error while fetching reviews by company id');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

}
