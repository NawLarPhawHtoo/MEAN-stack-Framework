import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.USER,
      [
        {
          name: 'James Smith',
          profile: 'http://localhost:3000/apiuploads/profiles/4c21c5a8-9f21-4f6e-8aaa-47cc427acbc0_images%20(1).png',
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
          profile: 'http://localhost:3000/apiuploads/profiles/9f3ff16a-a685-4275-87e6-a81ecfeb68a4_219969.png',
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