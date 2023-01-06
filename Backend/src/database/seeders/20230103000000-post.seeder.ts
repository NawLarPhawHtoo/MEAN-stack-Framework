import { Sequelize } from 'sequelize';
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
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fcontent%2Fimages%2F2022%2F11%2FWhat-is.png&imgrefurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fwhat-is-node-js%2F&tbnid=QRLRJWgxUWCoZM&vet=12ahUKEwiihOus9qr8AhXiRXwKHcskAY0QMygBegUIARDgAQ..i&docid=s3h-5W889pZVNM&w=1920&h=960&q=node%20js&hl=en-GB&ved=2ahUKEwiihOus9qr8AhXiRXwKHcskAY0QMygBegUIARDgAQ',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          category_id: 2,
          created_user_id: 2,
          title: 'Learning Angular',
          content: 'Learing About Angular',
          description: 'Learning Angular',
          author: 'June',
          references: 'https://www.w3schools.com/angular/',
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F480%2F1*VKY-Ldkt-iHobItql7G_5w.png&imgrefurl=https%3A%2F%2Fmedium.com%2F%40onejohi%2Fgetting-started-with-angular-5-5099104eb2f&tbnid=qVAV-dBjGg13xM&vet=12ahUKEwiDo6O19Kr8AhVWg2MGHRpDDCsQMygBegUIARDiAQ..i&docid=Q4umav45m96BBM&w=480&h=240&q=angular&hl=en-GB&ved=2ahUKEwiDo6O19Kr8AhVWg2MGHRpDDCsQMygBegUIARDiAQ',
          created_at: new Date(),
          updated_at: new Date()
        }

      ], {});
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.bulkDelete(DataBaseTableNames.POST, {}, {});
  }
}