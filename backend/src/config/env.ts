import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_USER,
  MONGO_DB_PASSWORD,
  SECRET,
  VIRTUAL_HOST
} = process.env as {
  PORT: string;
  MONGO_DB_HOST: string;
  MONGO_DB_NAME: string;
  MONGO_DB_USER: string;
  MONGO_DB_PASSWORD: string;
  SECRET: string;
  VIRTUAL_HOST: string;
};

export const ENV = {
  PORT,
  SECRET,
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_USER,
  MONGO_DB_PASSWORD,
  VIRTUAL_HOST
};
