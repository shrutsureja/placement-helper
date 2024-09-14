import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from '../tokens';

export default registerAs(ENV_NAMESPACES.DATABASE, () => {
  return {
    uri: process.env.DB_URI,
  };
});
