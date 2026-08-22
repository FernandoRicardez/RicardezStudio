import { Pool, type PoolConfig } from 'pg';
import { ENV } from './env';

const config: PoolConfig = {
  connectionString: ENV.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
};

if (ENV.DATABASE_SSL) {
  config.ssl = { rejectUnauthorized: true };
}

export const pool = new Pool(config);

pool.on('error', (error) => {
  console.error('Unexpected PostgreSQL pool error', error);
});

export async function checkDatabaseConnection(): Promise<void> {
  await pool.query('SELECT 1');
}
