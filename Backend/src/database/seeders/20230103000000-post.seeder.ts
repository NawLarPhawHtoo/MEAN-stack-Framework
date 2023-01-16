import { QueryInterface } from 'sequelize';

import { DataBaseTableNames } from '../constants';

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkInsert(DataBaseTableNames.POST,
      [
        {
          category_id: 1,
          created_user_id: 1,
          title: 'Learning Node JS',
          content: 'Learning About Node JS Framework',
          description: 'Learning Node JS Framework',
          author: 'Jame Smith',
          references: 'https://www.w3schools.com/nodejs/nodejs_intro.asp',
          image: 'apiuploads/images/node.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 1,
          created_user_id: 2,
          title: 'Learning Angular',
          content: 'Learing About Angular',
          description: 'Learning Angular',
          author: 'June',
          references: 'https://www.w3schools.com/angular/',
          image: 'apiuploads/images/angular.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 1,
          created_user_id: 3,
          title: 'Learning PHP',
          content: 'Learning About Laravel Framework',
          description: 'Learning Laravel Framework',
          author: 'Jame Smith',
          references: 'https://laravel.com/docs/9.x',
          image: 'apiuploads/images/laravel.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 2,
          created_user_id: 4,
          title: 'Learning Design',
          content: 'Learing About Design',
          description: 'Learning Design',
          author: 'June',
          references: 'https://www.w3schools.com/angular/',
          image: 'apiuploads/images/download(1).png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 2,
          created_user_id: 5,
          title: 'Learning Node JS',
          content: 'Learning About Node JS Framework',
          description: 'Learning Node JS Framework',
          author: 'Jame Smith',
          references: 'https://www.w3schools.com/nodejs/nodejs_intro.asp',
          image: 'apiuploads/images/node.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 2,
          created_user_id: 6,
          title: 'Learning Angular',
          content: 'Learing About Angular',
          description: 'Learning Angular',
          author: 'June',
          references: 'https://www.w3schools.com/angular/',
          image: 'apiuploads/images/angular.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 2,
          created_user_id: 7,
          title: 'Learning Angular',
          content: 'Learing About Angular',
          description: 'Learning Angular',
          author: 'June',
          references: 'https://www.w3schools.com/angular/',
          image: 'apiuploads/images/angular.png',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.POST, {}, {});
  }
}