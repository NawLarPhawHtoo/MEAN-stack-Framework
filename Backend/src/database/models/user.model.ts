import { DataTypes, Model, ModelAttributes } from "sequelize";

import { DataBaseTableNames,DataBaseModelNames } from "../constants";
import { DbModelFieldInit } from "../db-structure.model";
import { db } from '../db.provider';
import { AssociativeModel } from './_model.decorator';

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
  createdAt: string;
  updatedAt: string;
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
  }
};

@AssociativeModel
export class UserDbModel extends Model{
 static associate({
//  UserDbModel
}:any){
// this.hasMany(UserDbModel,{ foreignKey:'id', as:'user'});
}
}

UserDbModel.init(modelAttributes as ModelAttributes,{
sequelize:db,
modelName:DataBaseModelNames.USER,
tableName:DataBaseTableNames.USER,
timestamps:true,
underscored:true
});