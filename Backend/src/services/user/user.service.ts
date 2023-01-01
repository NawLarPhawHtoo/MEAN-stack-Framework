// import { UserRepository } from './../../dal/user/user.repository';
import { FindOptions } from "sequelize";

// import { IUserRepository } from "../../dal/user";

import { IUserModel, UserDbModel } from "../../database";

// export interface UserServiceOptions {
//   userRepository: IUserRepository;
// }

export interface IUserService {
  getUser(userId: number, userAttributes?: Array<keyof IUserModel>, otherFindOptions?: FindOptions): Promise<any>;

  // getUserList(userId: number[], userAttributes?: Array<keyof IUserModel>, otherFindOptions?: FindOptions): Promise<any[]>;
  getUserList(): Promise<any>;
}

class UserService implements IUserService {
  // private services: UserServiceOptions;

  // constructor(services: UserServiceOptions) {
  //   this.services = services;
  // }

  async getUser(userId: number, userAttributes?: Array<keyof IUserModel>, otherFindOptions?: FindOptions): Promise<any> {
    return (await UserDbModel.findOne({
      ...otherFindOptions,
      where: { ...otherFindOptions?.where, id: userId },
      attributes: userAttributes
    })) as any;
  }

  // async getUserList(userId: number[], userAttributes?: Array<keyof IUserModel>, otherFindOptions?: FindOptions): Promise<any[]> {
  //   return (await UserDbModel.findAll({
  //     ...otherFindOptions,
  //     where: { ...otherFindOptions?.where, id: userId },
  //     attributes: userAttributes
  //   })) as any;
  // }

  async getUserList(): Promise<any> {
    return (await UserDbModel.findAll()) as any;
  }
}

export const userService = new UserService();
