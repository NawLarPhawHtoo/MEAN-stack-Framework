import { config } from "./config";

module.exports = {
  local: {
    username: config.DB_USERNAME || 'root',
    password: config.DB_PASSWORD || 'root',
    database: config.DB_NAME || 'nodejs',
    host: config.DB_HOST || '127.0.0.1',
    port: config.DB_PORT || '3306',
    dialect: 'mysql'
  },
  development: {
    username: config.DB_USERNAME || 'root',
    password: config.DB_PASSWORD || 'root',
    database: config.DB_NAME || 'nodejs',
    host: config.DB_HOST || '127.0.0.1',
    port: config.DB_PORT || '3306',
    dialect: 'mysql'
  },
  production: {
    username: config.DB_USERNAME || 'root',
    password: config.DB_PASSWORD || 'root',
    database: config.DB_NAME || 'nodejs',
    host: config.DB_HOST || '127.0.0.1',
    port: config.DB_PORT || '3306',
    dialect: 'mysql'
  },
  test: {
    username: config.DB_USERNAME || 'root',
    password: config.DB_PASSWORD || 'root',
    database: config.DB_NAME || 'nodejs',
    host: config.DB_HOST || '127.0.0.1',
    port: config.DB_PORT || '3306',
    dialect: 'mysql'
  },
};