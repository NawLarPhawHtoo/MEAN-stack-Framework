import { DataTypes, ModelAttributes, QueryInterface, QueryOptions } from "sequelize";

import { DataBaseTableNames } from "../constants";

import { migrationWrapper } from "../transactions";

export default {
  up: async (queryInterface: QueryInterface, DataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.createTable(
        DataBaseTableNames.CATEGOTY, {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true
          },
          description: {
            type: DataTypes.STRING,
          },
          content: {
            type: DataTypes.STRING,
          },
          image: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          created_at: {
            type: DataTypes.DATE
          },
          updated_at: {
            type: DataTypes.DATE
          },
        } as ModelAttributes, options);
    };
    await migrationWrapper(migration);
  },
  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.dropTable(DataBaseTableNames.CATEGOTY,options);
    };
    await migrationWrapper(migration);
  }
}