import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  DATABASE_URL,
  DATABASE_SSL,
  FRONTEND_URL,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET
} = process.env as {
  PORT?: string;
  DATABASE_URL?: string;
  DATABASE_SSL?: string;
  FRONTEND_URL?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
};

export const ENV = {
  PORT: PORT || '5000',
  DATABASE_URL,
  DATABASE_SSL: DATABASE_SSL === 'true',
  FRONTEND_URL: FRONTEND_URL || 'http://localhost:3000',
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET
};
