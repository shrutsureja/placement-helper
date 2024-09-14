import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from './admin.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './admin.schema';
import { DBCollectionNameTokens } from 'src/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DBCollectionNameTokens.ADMIN, schema: AdminSchema },
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
})
export class AdminModule {}
