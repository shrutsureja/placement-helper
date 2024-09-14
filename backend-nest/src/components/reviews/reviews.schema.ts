import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Reviews {
  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'users' })
  userId?: Types.ObjectId;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'companies' })
  companyId?: Types.ObjectId;

  @Prop({ type: MongoSchema.Types.String })
  review: string;

  @Prop({ type: MongoSchema.Types.Mixed })
  llmAnswer: any;
}

export type ReviewsDocument = HydratedDocument<Reviews>;

export const ReviewsSchema = SchemaFactory.createForClass(Reviews);
