import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from '../tokens';

const DEVELOPMENT_LOGGER_CONFIGS = {
  quietReqLogger: true,
  level: process.env.LOG_LEVEL || 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
    },
  },
};

const PRODUCTION_LOGGER_CONFIGS = { level: process.env.LOG_LEVEL || 'debug' };

export default registerAs(ENV_NAMESPACES.LOGGER, () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      pinoHttp: PRODUCTION_LOGGER_CONFIGS,
    };
  }
  return {
    pinoHttp: DEVELOPMENT_LOGGER_CONFIGS,
  };
});
