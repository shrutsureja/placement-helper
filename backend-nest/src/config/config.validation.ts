export function validateEnv(config: Record<string, unknown>) {
  if (!config.PORT) {
    throw new Error('PORT is required');
  }
  if (!config.DB_URI) {
    throw new Error('DB_URI is required');
  }
  return config;
}
