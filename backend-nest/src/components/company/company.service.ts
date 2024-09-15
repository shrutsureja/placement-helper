import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DBCollectionNameTokens } from '../../config';
import { Company } from './company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  private readonly logger = new Logger(CompanyService.name);
  constructor(
    @InjectModel(DBCollectionNameTokens.COMPANY)
    private readonly companyModel: Model<Company>,
  ) {}

  async create(createCompayDto) {
    try {
      const company = await this.companyModel.create(createCompayDto);
      return company;
    } catch (err) {
      this.logger.log({ err }, 'Error while creating review');
    }
  }

  async getAllCompanyDetails() {
    try {
      return await this.companyModel.find();
    } catch (err) {
      this.logger.log({ err }, 'Error while creating review');
    }
  }

  async getCompanyById(id: string) {
    try {
      return await this.companyModel.findById(id);
    } catch (err) {
      this.logger.log({ err }, 'Error while creating review');
    }
  }
}
