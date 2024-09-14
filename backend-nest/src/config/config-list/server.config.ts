import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from '../tokens';

export default registerAs(ENV_NAMESPACES.SERVER, () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    host: process.env.HOST || '127.0.0.1',
    llmBaseURL: process.env.LLM_BASE_URL,
  };
});
