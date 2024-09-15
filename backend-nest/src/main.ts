import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger as Pino } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { ENV_NAMESPACES } from './config';
import * as crypto from 'crypto';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as fastifyCors from '@fastify/cors';

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

  app.register(fastifyCors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  const configService = app.get(ConfigService);
  app.register(require('fastify-auth0-verify'), {
    domain: configService.get(`${ENV_NAMESPACES.SERVER}.domain`),
    secret: configService.get(`${ENV_NAMESPACES.SERVER}.secret`),
    audience: configService.get(`${ENV_NAMESPACES.SERVER}.audience`),
  });
  app.useLogger(app.get(Pino));

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
