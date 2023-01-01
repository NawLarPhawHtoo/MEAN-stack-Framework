import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.USER,
      [
        {
          name: 'James Smith',
          email: 'jamessmith@gmail.com',
          password: '12345678',
          gender: 'male',
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Rose Mary',
          email: 'rosemary@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.USER, {}, {});
  }
}