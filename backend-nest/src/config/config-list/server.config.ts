import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from '../tokens';

export default registerAs(ENV_NAMESPACES.SERVER, () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    host: process.env.HOST || '0.0.0.0',
    llmBaseURL: process.env.LLM_BASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    secret: process.env.AUTH0_SECRET,
    audience: process.env.AUTH0_AUDIENCE,
    clientId: process.env.AUTH0_CLIENT_ID,
    mgmtApiAccessToken: process.env.MGMT_API_ACCESS_TOKEN,
  };
});
