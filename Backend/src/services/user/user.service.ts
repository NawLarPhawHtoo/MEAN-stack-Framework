import { FindOptions } from "sequelize";

import { IUserModel, UserDbModel } from "../../database";
class UserService {
 
  getUserList(userAttributes?: Array<keyof IUserModel>, otherFindOptions?: FindOptions): Promise<any> {
    return UserDbModel.findAll({
      ...otherFindOptions,
      attributes: userAttributes
    });
  }
  async createUser(returnObj: Partial<IUserModel>): Promise<UserDbModel> {
    const createUser = await UserDbModel.create({ ...returnObj, created_at: new Date().toISOString() });
    return createUser;
  }
  async updateUser(returnObj: Partial<IUserModel>): Promise<any> {
    await UserDbModel.update(returnObj, {
      where: { id: returnObj.id as number }
    });
  }
  getUserById(user_id: number): Promise<any> {
    return UserDbModel.findOne({
      where: {
        id: user_id,
      }
    }) as any;
  }
  async deleteUserById(id: number): Promise<any> {
    await UserDbModel.destroy(
      {
        where: { id },
      }
    );
  }
}
export const userService = new UserService();