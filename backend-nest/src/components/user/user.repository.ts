import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { DBCollectionNameTokens } from 'src/config';
import { UserDocument } from './user.schema';

const COMMON_ERROR_MESSAGE = 'Oops something went wrong';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);
  constructor(
    @InjectModel(DBCollectionNameTokens.USER)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: UserDocument): Promise<UserDocument> {
    try {
      return await this.userModel.create(user);
    } catch (err) {
      this.logger.error({ err }, 'Error while creating user');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

  async findOne(filterQuery: FilterQuery<UserDocument>): Promise<UserDocument> {
    try {
      return await this.userModel.findOne(filterQuery);
    } catch (err) {
      this.logger.error({ err }, 'Error while finding user');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

  async find(filterQuery: FilterQuery<UserDocument>): Promise<UserDocument[]> {
    try {
      return await this.userModel.find(filterQuery);
    } catch (err) {
      this.logger.error({ err }, 'Error while finding users');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }
}
