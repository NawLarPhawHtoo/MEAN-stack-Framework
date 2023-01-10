import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";

import { DataBaseTableNames, DataBaseModelNames } from "../constants";

import { DbModelFieldInit } from "../db-structure.model";

import { db } from "../db.provider";

import { associative } from "./associate.decorator";

export interface ITopPostsModel {
  id: number;
  post_id: number;
  created_at: string | Date;
  updated_at: string | Date;
  deleted_at: string | Date;
}

const modelAttributes: DbModelFieldInit<Partial<ITopPostsModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'post',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('UTC_TIMESTAMP'),
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE
  },
  deleted_at: {
    type: DataTypes.DATE
  }
};
@associative
export class TopPostsDbModel extends Model {
  public id!: number;
  public post_id!: number;
  public created_at!: string | Date;
  public updated_at!: string | Date;
  public deleted_at!: string | Date;

  static associate({ PostDbModel }: any) {
    this.belongsTo(PostDbModel, { foreignKey: 'post_id', as: 'post' })
  }
}

TopPostsDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.TOP_POST,
  tableName: DataBaseTableNames.TOP_POST,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true
})