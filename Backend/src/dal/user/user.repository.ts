import { FindOptions } from "sequelize";

import { IUserModel, UserDbModel } from "../../database";

import { BaseRepository, IRepository } from "../_base";

export interface IUserRepository extends IRepository<IUserModel> {
  getOneById(id: number, options?: FindOptions): Promise<Partial<IUserModel>>;
}

export class UserRepository extends BaseRepository<IUserModel> implements IUserRepository {
  constructor() {
    super(UserDbModel);
  }

  getOneById(id: number, options?: FindOptions) {
    return this.findOne({
      ...options,
      where: { id }
    });
  }
}