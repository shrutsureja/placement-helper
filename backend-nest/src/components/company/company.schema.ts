import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Company {
  @Prop({ type: MongoSchema.Types.String })
  companyName : string;

  @Prop({ type: MongoSchema.Types.String })
  description : string;

  @Prop({ type: MongoSchema.Types.String })
  city: string;

  @Prop({ type: MongoSchema.Types.String })
  state : string;

  @Prop({ type: MongoSchema.Types.String })
  address : string;
}

export type CompanyDocument = HydratedDocument<Company>;

export const CompanySchema = SchemaFactory.createForClass(Company);
