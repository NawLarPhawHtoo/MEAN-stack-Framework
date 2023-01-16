import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.USER,
      [
        {
          name: 'James Smith',
          profile: 'apiuploads/profiles/4c21c5a8-9f21-4f6e-8aaa-47cc427acbc0_images%20(1).png',
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
          profile: 'apiuploads/profiles/9f3ff16a-a685-4275-87e6-a81ecfeb68a4_219969.png',
          email: 'rosemary@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          phone: '09987654321',
          dob: '1993-12-12',
          address: 'London',
          created_at: '2022-01-03',
          updated_at: '2022-01-03'
        },
        {
          name: 'John',
          profile: 'apiuploads/profiles/4c21c5a8-9f21-4f6e-8aaa-47cc427acbc0_images%20(1).png',
          email: 'john@gmail.com',
          password: '12345678',
          gender: 'male',
          role: 'admin',
          phone: '09987654321',
          dob: '1993-05-12',
          address: 'Paris',
          created_at: '2022-01-02',
          updated_at: '2022-01-02'
        },
        {
          name: 'Jasmine',
          profile: 'apiuploads/profiles/9f3ff16a-a685-4275-87e6-a81ecfeb68a4_219969.png',
          email: 'jasmine@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          phone: '09987654321',
          dob: '1993-12-09',
          address: 'London',
          created_at: '2022-01-03',
          updated_at: '2022-01-03'
        },
        {
          name: 'Simon',
          profile: 'apiuploads/profiles/4c21c5a8-9f21-4f6e-8aaa-47cc427acbc0_images%20(1).png',
          email: 'simon@gmail.com',
          password: '12345678',
          gender: 'male',
          role: 'admin',
          phone: '09987654321',
          dob: '1995-01-12',
          address: 'America',
          created_at: '2022-01-02',
          updated_at: '2022-01-02'
        },
        {
          name: 'Aye Aye',
          profile: 'apiuploads/profiles/9f3ff16a-a685-4275-87e6-a81ecfeb68a4_219969.png',
          email: 'ayeaye@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          phone: '09987654321',
          dob: '1997-12-12',
          address: 'Yangon',
          created_at: '2022-01-03',
          updated_at: '2022-01-03'
        },
        {
          name: 'Ma Ma',
          profile: 'apiuploads/profiles/9f3ff16a-a685-4275-87e6-a81ecfeb68a4_219969.png',
          email: 'mama@gmail.com',
          password: '12345678',
          gender: 'female',
          role: 'user',
          phone: '09987654321',
          dob: '1997-12-12',
          address: 'Mandalay',
          created_at: '2022-01-03',
          updated_at: '2022-01-03'
        },
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.USER, {}, {});
  }
}