import { QueryInterface, QueryOptions, DataTypes,ModelAttributes } from 'sequelize';

import { DataBaseTableNames } from '../constants';

import { migrationWrapper } from '../transactions';

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.createTable(
        DataBaseTableNames.USER_POST,
        {
          id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          userId: {
            type:DataTypes.INTEGER,
            allowNull: false,
          },
          postId: {
            type:DataTypes.INTEGER,
            allowNull: false,
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
  // down: async (queryInterface: QueryInterface, Sequelize: any) => {
  //   const migration = async (options: QueryOptions) => {
  //     await queryInterface.dropTable(
  //       DataBaseTableNames.USER_POST, options);
  //   };
  //   await migrationWrapper(migration);
  // }

}