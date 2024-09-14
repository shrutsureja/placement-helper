import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger as Pino } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { ENV_NAMESPACES } from './config';
import * as crypto from 'crypto';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: false,
      genReqId: (): string => crypto.randomUUID(),
    }),
    {
      rawBody: true,
    },
  );
  app.useLogger(app.get(Pino));

  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(
    configService.get(`${ENV_NAMESPACES.SERVER}.port`),
    configService.get(`${ENV_NAMESPACES.SERVER}.host`),
  );
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().catch((err) => {
  logger.error({ err }, `Error in bootstrap() start-up`);
});
