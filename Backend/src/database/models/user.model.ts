import { DataTypes, Model, ModelAttributes } from "sequelize";

import { DataBaseTableNames, DataBaseModelNames } from "../constants";

import { DbModelFieldInit } from "../db-structure.model";

import { db } from '../db.provider';

import { associative } from './associate.decorator';

export enum UserGenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum UserRoleEnum {
  USER = 'user',
  ADMIN = 'admin'
}

export interface IUserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  gender: UserGenderEnum;
  role: UserRoleEnum;
  phone: string;
  dob: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const modelAttributes: DbModelFieldInit<Partial<IUserModel>> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.ENUM,
    values: Object.values(UserGenderEnum)
  },
  role: {
    type: DataTypes.ENUM,
    values: Object.values(UserRoleEnum),
    defaultValue: UserRoleEnum.USER
  },
  phone: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.DATE,
  },
  address: {
    type: DataTypes.STRING,
  },

};

@associative
export class UserDbModel extends Model {
  static associate({
    PostDbModel
  }: any) {

    this.hasMany(PostDbModel, { foreignKey: 'created_user_id', as: 'user' });
  }
}

UserDbModel.init(modelAttributes as ModelAttributes, {
  sequelize: db,
  modelName: DataBaseModelNames.USER,
  tableName: DataBaseTableNames.USER,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true
});