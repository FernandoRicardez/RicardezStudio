import fs from 'node:fs/promises';
import path from 'node:path';
import { pool } from '../config/database';

const migrationsDirectory = path.resolve(process.cwd(), 'database', 'migrations');

async function migrate(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required to run database migrations.');
  }

  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename text PRIMARY KEY,
        applied_at timestamptz NOT NULL DEFAULT now()
      )
    `);

    await client.query("SELECT pg_advisory_lock(hashtext('ricardez_store_migrations'))");

    const entries = await fs.readdir(migrationsDirectory);
    const migrationFiles = entries
      .filter((filename) => /^\d+.*\.sql$/.test(filename) && !filename.endsWith('.down.sql'))
      .sort();

    const appliedResult = await client.query<{ filename: string }>(
      'SELECT filename FROM schema_migrations'
    );
    const applied = new Set(appliedResult.rows.map(({ filename }) => filename));

    for (const filename of migrationFiles) {
      if (applied.has(filename)) {
        continue;
      }

      const sql = await fs.readFile(path.join(migrationsDirectory, filename), 'utf8');

      try {
        await client.query('BEGIN');
        await client.query(sql);
        await client.query('INSERT INTO schema_migrations (filename) VALUES ($1)', [filename]);
        await client.query('COMMIT');
        console.log(`Applied migration ${filename}`);
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      }
    }
  } finally {
    await client.query("SELECT pg_advisory_unlock(hashtext('ricardez_store_migrations'))");
    client.release();
    await pool.end();
  }
}

migrate().catch((error) => {
  console.error('Database migration failed', error);
  process.exitCode = 1;
});
