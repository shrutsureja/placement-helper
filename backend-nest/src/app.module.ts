import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { ENV_NAMESPACES, validateEnv } from './config';
import serverConfig from './config/config-list/server.config';
import loggerConfig from './config/config-list/logger.config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/config-list/database.config';
import { AdminModule } from './components/admin/admin.module';
import { UserModule } from './components/user/user.module';
import { CollegeModule } from './components/college/college.module';
import { SuperAdminModule } from './components/super-admin/super-admin.module';
import { ReviewsModule } from './components/reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
      load: [serverConfig, loggerConfig, databaseConfig],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const loggerConfigurations = configService.get(
          `${ENV_NAMESPACES.LOGGER}.pinoHttp`,
        );
        return {
          pinoHttp: loggerConfigurations,
        };
      },
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(`${ENV_NAMESPACES.DATABASE}.uri`),
      }),
      inject: [ConfigService],
    }),
    AdminModule,
    UserModule,
    CollegeModule,
    SuperAdminModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
