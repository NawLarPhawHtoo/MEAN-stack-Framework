import { UserDbModel } from './../models/user.model';
import { Sequelize } from 'sequelize';
import { ModelAttributes } from 'sequelize';
import { QueryOptions } from 'sequelize';
import { QueryInterface } from 'sequelize';
import { DataTypes } from 'sequelize';

import { DataBaseTableNames } from '../constants';

import { migrationWrapper } from '../transactions';

export default {
  up: async (queryInterface: QueryInterface, dataTppes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.createTable(
        DataBaseTableNames.POST,
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          category_id: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //   model: UserDbModel,
            //   key: 'id',
            // },
          },
          // created_user_id: {
          //   type: DataTypes.INTEGER,
          //   allowNull: true,
          // references: {
          //   model: UserDbModel,
          //   key: 'id',
          // },
          // references: {
          //   model: UserDbModel,
          //   key: 'id',
          //   as: 'created_user_id',
          // },
          // },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          content: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          author: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          references: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          image: {
            type: DataTypes.TEXT,
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
        DataBaseTableNames.POST, options);
    };
    await migrationWrapper(migration);
  }
}