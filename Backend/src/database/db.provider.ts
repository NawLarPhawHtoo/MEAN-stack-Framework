import { Sequelize } from "sequelize";

import { config } from "../config";
class DbProvider {
  db: Sequelize;

  constructor() {
    this.db = new Sequelize(config.DB_NAME,config.DB_USERNAME,config.DB_PASSWORD, {
      host: config.DB_HOST,
      port: +config.DB_PORT,
      dialect: 'mysql',
      define:{
         charset:'utf8',
         collate: 'utf8_general_ci'
      },
      dialectOptions: { decimalNumbers: true }
    });
  }
}

export const db = new DbProvider().db;