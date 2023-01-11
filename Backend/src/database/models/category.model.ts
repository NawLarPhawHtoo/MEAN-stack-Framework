import { DataTypes, Model, ModelAttributes } from "sequelize";

import { DataBaseModelNames, DataBaseTableNames } from "../constants";

import { DbModelFieldInit } from "../db-structure.model";

import { db } from "../db.provider";

import { associative } from "./associate.decorator";

export interface ICategoryModel {
  id: number;
  name: string;
  description: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deleteAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<ICategoryModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.TEXT
  }
};
@associative
export class CategoryDbModel extends Model {
  static associate({
    PostDbModel
  }: any) {
    this.hasMany(PostDbModel, { foreignKey: 'category_id', as: 'category' })
  }
}

CategoryDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.CATEGOTY,
  tableName: DataBaseTableNames.CATEGOTY,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true
})
