import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  HydratedDocument,
  ObjectId,
  Schema as MongoSchema,
  Types,
} from 'mongoose';
import { DBCollectionNameTokens } from 'src/config';
import { Roles } from 'src/config/tokens/roles.token';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: MongoSchema.Types.String })
  name: string;

  @Prop({ type: MongoSchema.Types.String })
  email: string;

  @Prop({ type: MongoSchema.Types.String })
  password: string;

  @Prop({ type: MongoSchema.Types.String, enum: [Roles.USER] })
  role: string;

  @Prop({ type: MongoSchema.Types.Mixed })
  reviewList: any[];

  @Prop({ type: MongoSchema.Types.String })
  phoneNumber: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
