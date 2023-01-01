import { BulkCreateOptions, CreateOptions, DestroyOptions, IncrementDecrementOptionsWithBy, Transaction, UpdateOptions } from "sequelize";

import { FindOptions } from "sequelize";

export interface IRepository<T> {
  modelName: string;

  bulkCreate(dataSet: Partial<T>[], options?: BulkCreateOptions): Promise<any>;

  create(data: Partial<T>, options?: CreateOptions): Promise<T>;

  update(patchData: Partial<T>, options?: UpdateOptions): Promise<Partial<T>>;

  delete(FindOptions?: FindOptions, destroyOptions?: DestroyOptions): Promise<any>;

  findOne(options?: FindOptions): Promise<T>;

  findOrCreate(options: { where: Partial<T>; defaults?: Partial<T>; transaction?: Transaction }): Promise<[T, boolean]>;

  getById(id: number, options?: FindOptions): Promise<T>;

  findAll(options?: FindOptions): Promise<T[]>;

  findAndCountAll(options?: FindOptions): Promise<{ rows: T[]; count: number }>;

  count(options?: FindOptions): Promise<number>;

  increaseNumberValue<K extends keyof T>(field: K, options?: IncrementDecrementOptionsWithBy): Promise<Partial<T>>;

}
export interface IFindAndCountResult<T> {
  rows: T[];
  count: number;
}

export interface IPaginationOptions {
  limit: number;
  offset: number;
}
