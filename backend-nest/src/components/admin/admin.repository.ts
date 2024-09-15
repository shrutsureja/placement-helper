import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { DBCollectionNameTokens } from 'src/config';
import { AdminDocument } from './admin.schema';

const COMMON_ERROR_MESSAGE = 'Oops something went wrong';

@Injectable()
export class AdminRepository {
  private readonly logger = new Logger(AdminRepository.name);
  constructor(
    @InjectModel(DBCollectionNameTokens.ADMIN)
    private readonly adminModel: Model<AdminDocument>,
  ) {}

  async create(admin: AdminDocument): Promise<AdminDocument> {
    try {
      return await this.adminModel.create(admin);
    } catch (err) {
      this.logger.error({ err }, 'Error while creating admin');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }
  async findOne(
    filterQuery: FilterQuery<AdminDocument>,
  ): Promise<AdminDocument> {
    try {
      return await this.adminModel.findOne(filterQuery);
    } catch (err) {
      this.logger.error({ err }, 'Error while finding admin');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }

  async find(
    filterQuery: FilterQuery<AdminDocument>,
  ): Promise<AdminDocument[]> {
    try {
      return await this.adminModel.find(filterQuery);
    } catch (err) {
      this.logger.error({ err }, 'Error while finding admin');
      throw new InternalServerErrorException(COMMON_ERROR_MESSAGE);
    }
  }
}
