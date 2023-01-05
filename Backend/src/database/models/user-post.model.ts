import { UserDbModel } from './user.model';
import { PostDbModel } from './post.model';
import { DataTypes, Model, ModelAttributes } from "sequelize";

import { DataBaseModelNames, DataBaseTableNames } from "../constants";

import { DbModelFieldInit } from "../db-structure.model";

import { db } from "../db.provider";

import { AssociativeModel } from "./_model.decorator";

export interface IUserPostModel {
  id: number;
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<IUserPostModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
};

@AssociativeModel
export class UserPostDbModel extends Model {
  static associate({
    UserDbModel,
    PostDbModel
  }: any) {
    this.belongsTo(UserDbModel, { foreignKey: 'userId', as: 'user' })
    this.belongsTo(PostDbModel, { foreignKey: 'postId', as: 'post' })
  }
}

UserPostDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.USER_POST,
  tableName: DataBaseTableNames.USER_POST,
  timestamps: true,
  underscored: true
});
