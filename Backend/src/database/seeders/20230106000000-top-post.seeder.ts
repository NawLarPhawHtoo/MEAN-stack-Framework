import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.TOP_POST, [
      {
        post_id: 1,
        created_at: '2023-01-06',
        updated_at: '2023-01-06'
      },
      {
        post_id: 2,
        created_at: '2023-01-07',
        updated_at: '2023-01-07'
      },
      {
        post_id: 3,
        created_at: '2023-01-05',
        updated_at: '2023-01-05'
      },
      {
        post_id: 4,
        created_at: '2023-01-06',
        updated_at: '2023-01-06'
      },
      {
        post_id: 5,
        created_at: '2023-01-07',
        updated_at: '2023-01-07'
      },
      {
        post_id: 6,
        created_at: '2023-01-05',
        updated_at: '2023-01-05'
      },
      {
        post_id: 7,
        created_at: '2023-01-05',
        updated_at: '2023-01-05'
      }
    ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.TOP_POST, {}, {});
  }
}