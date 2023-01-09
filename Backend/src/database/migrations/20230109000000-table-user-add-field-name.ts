import { DataTypes, ModelAttributes, QueryInterface, QueryOptions } from "sequelize";

import { DataBaseTableNames } from "../constants";

import { UserGenderEnum, UserRoleEnum } from "../models";

import { migrationWrapper } from "../transactions";

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.addColumn(
        DataBaseTableNames.USER,
        'token',
        {
          type: DataTypes.TEXT,
          allowNull: true
        },
        options
      );
    };
    await migrationWrapper(migration);
  },
  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.removeColumn(
        DataBaseTableNames.USER,
        'token',
        options
      );
    };
    await migrationWrapper(migration);
  }
};
