export function validateEnv(config: Record<string, unknown>) {
  if (!config.PORT) {
    throw new Error('PORT is required');
  }
  if (!config.DB_URI) {
    throw new Error('DB_URI is required');
  }
  if (!config.LLM_BASE_URL) {
    throw new Error('LLM_BASE_URL is required');
  }
  return config;
}
