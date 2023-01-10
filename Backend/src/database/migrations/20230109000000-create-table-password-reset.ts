import { DataTypes, ModelAttributes, QueryInterface, QueryOptions } from "sequelize";

import { DataBaseTableNames } from "../constants";

// import { UserGenderEnum, UserRoleEnum } from "../models";

import { migrationWrapper } from "../transactions";

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.createTable(
        DataBaseTableNames.PASSWORD_RESET,
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          email: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          token: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          created_at: {
            type: DataTypes.DATE
          },
          updated_at: {
            type: DataTypes.DATE
          },
        } as ModelAttributes, options
      );
    };
    await migrationWrapper(migration);
  },
  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.dropTable(
        DataBaseTableNames.PASSWORD_RESET, options
      );
    };
    await migrationWrapper(migration);
  }
};
