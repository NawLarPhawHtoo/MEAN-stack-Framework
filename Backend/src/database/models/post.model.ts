import { DataTypes, Model, ModelAttributes } from 'sequelize';

import { DataBaseModelNames, DataBaseTableNames } from '../constants';

import { DbModelFieldInit } from '../db-structure.model';

import { db } from '../db.provider';

import { associative } from './associate.decorator';

export interface IPostModel {
  id: number;
  category_id: number;
  created_user_id: number;
  title: string;
  content: string;
  description: string;
  author: string;
  references: string;
  image: string;
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
    allowNull: false
  },
  created_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
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
@associative
export class PostDbModel extends Model {
  static associate({
    UserDbModel,
    TopPostsDbModel,
    CategoryDbModel
  }: any) {
    this.belongsTo(UserDbModel, { foreignKey: 'created_user_id', as: 'user' });
    this.belongsTo(CategoryDbModel, { foreignKey: 'category_id', as: 'category' });
    this.hasMany(TopPostsDbModel, { foreignKey: 'post_id', as: 'post' });
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