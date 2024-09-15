import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DBCollectionNameTokens } from '../../config';
import { CompanySchema } from './company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DBCollectionNameTokens.COMPANY, schema: CompanySchema },
    ]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
