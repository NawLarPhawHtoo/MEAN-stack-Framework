import { UserDbModel } from './user.model';
import { DataTypes, Model, ModelAttributes } from 'sequelize';

import { DataBaseModelNames, DataBaseTableNames } from '../constants';

import { DbModelFieldInit } from '../db-structure.model';

import { UserPostDbModel } from './user-post.model';

import { db } from '../db.provider';

import { AssociativeModel } from './_model.decorator';

export interface IPostModel {
  id: number;
  category_id: number;
  userId: number;
  title: string;
  content: string;
  description: string;
  author: string;
  references: string;
  image: string;
  // created_user_id: number;
  createdAt: string;
  updatedAt: string;
  deleteAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<IPostModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {}
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: 'user',
    //   key: 'id',
    // },
  },
  // created_user_id: {
  //   type: DataTypes.INTEGER
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  references: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },

};
@AssociativeModel
export class PostDbModel extends Model {
  static associate({
    UserDbModel
  }: any) {
    this.belongsTo(UserDbModel);
  }
}

PostDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.POST,
  tableName: DataBaseTableNames.POST,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true
});