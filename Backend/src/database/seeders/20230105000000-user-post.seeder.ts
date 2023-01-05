import { QueryInterface, Sequelize } from 'sequelize';

import { DataBaseTableNames } from '../constants';

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.USER_POST,
      [
        {
          userId: 1,
          postId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          userId: 2,
          postId: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.USER_POST, {}, {});
  }
}