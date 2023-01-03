import { UserDbModel } from './../models/user.model';
import { DataTypes, ModelAttributes, QueryInterface, QueryOptions } from "sequelize";

import { DataBaseTableNames } from "../constants";

import { UserGenderEnum, UserRoleEnum } from "../models";
import { migrationWrapper } from "../transactions";

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.createTable(
        DataBaseTableNames.USER,
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          created_user_id:{
            type: DataTypes.INTEGER,
            allowNull: true
          },
          gender: {
            type: DataTypes.ENUM,
            values: Object.values(UserGenderEnum)

          },
          role: {
            type: DataTypes.ENUM,
            values: Object.values(UserRoleEnum),
            defaultValue: "USER"
          },
          phone:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          dob:{
            type: DataTypes.DATE,
            allowNull: true,
          },
          address:{
            type: DataTypes.STRING,
            allowNull: true,
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
        DataBaseTableNames.USER, options);
    };
    await migrationWrapper(migration);
  }
};