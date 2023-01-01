import { ModelAttributeColumnOptions, WhereValue } from "sequelize";

export type KeysOf<T> = { [P in keyof T]: string };
export type KeyArrayOf<T> = Array<keyof T>;
export type DbModelFieldInit<T> = { [P in keyof T]: ModelAttributeColumnOptions };
export type DbModelFindObject<T> = { [P in keyof T]?: WhereValue };

export interface IDBResponse<T> {
  [index: string]: any;
  dataValues: T;
}

export interface IDictionary<T> {
  [index: string]: T;
}

export type PropType<T, K extends keyof T> = T[K];