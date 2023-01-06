import { QueryInterface } from "sequelize";

import { DataBaseTableNames } from "../constants";

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.CATEGOTY,
      [
        {
          name: 'Web Programming',
          description: 'This is the web programming category.',
          content: 'This is the web programming category.',
          image: 'http://localhost:3000/apiuploads/images/download(2).jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Web Design',
          description: 'This is the web design category.',
          content: 'This is the web design category.',
          image: 'http://localhost:3000/apiuploads/images/download(1).jpg',
          updated_at: new Date()
        },
        {
          name: 'Web Development',
          description: 'This is the web development category.',
          content: 'This is the web development category.',
          image: 'http://localhost:3000/apiuploads/images/download.jpg',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.CATEGOTY, {}, {});
  }
}