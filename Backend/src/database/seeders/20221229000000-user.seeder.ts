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
          phone: '09987654321',
          dob: '1993-01-12',
          address: 'America',
          created_at: '2022-01-02',
          updated_at: '2022-01-02'
        },
        {
          name: 'Rose Mary',
          email: 'rosemary@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          phone: '09987654321',
          dob: '1993-01-12',
          address: 'America',
          created_at: '2022-01-03',
          updated_at: '2022-01-03'
        }
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.USER, {}, {});
  }
}