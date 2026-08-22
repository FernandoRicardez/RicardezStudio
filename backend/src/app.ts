import express from 'express';
import cors from 'cors';
import { ENV } from './config/env';
import { checkDatabaseConnection, pool } from './config/database';

const app = express();
const PORT = ENV.PORT;

// Middleware
app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/health', async (_req, res) => {
  try {
    await checkDatabaseConnection();
    res.status(200).json({ status: 'ok', database: 'connected' });
  } catch {
    res.status(503).json({ status: 'degraded', database: 'unavailable' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

async function shutdown(): Promise<void> {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
