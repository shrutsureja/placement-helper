import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { DBCollectionNameTokens } from 'src/config';
import { Roles } from 'src/config/tokens/roles.token';

@Schema({ timestamps: true })
export class Admin {
  @Prop({ type: MongoSchema.Types.String })
  name: string;

  @Prop({ type: MongoSchema.Types.String })
  email: string;

  @Prop({ type: MongoSchema.Types.String })
  password: string;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: DBCollectionNameTokens.COLLEGE,
  })
  collegeId: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.String,
    enum: [Roles.SUPER_ADMIN, Roles.ADMIN],
  })
  role: string;

  @Prop({ type: MongoSchema.Types.String })
  phoneNumber: string;
}

export type AdminDocument = HydratedDocument<Admin>;
export const AdminSchema = SchemaFactory.createForClass(Admin);
