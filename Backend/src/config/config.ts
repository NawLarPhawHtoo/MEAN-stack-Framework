import dotenv from 'dotenv';

dotenv.config();

export const config = {
  ENV: process.env.NODE_ENV || 'local',

  VERSION: process.env.VERSION || '0.0.0',

  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',

  PORT: parseInt((process.env.PORT as string) || '3000', 10),
  HOST: '0.0.0.0',

  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '3306',
  DB_NAME: process.env.DB_NAME || 'nodejs',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',
  DB_USERNAME: process.env.DB_USERNAME || 'root',
}
