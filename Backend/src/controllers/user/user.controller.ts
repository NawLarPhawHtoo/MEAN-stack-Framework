import { IPaginationOptions } from './../../dal/_base/interfaces';
// import { UserRepository } from './../../dal/user/user.repository';
import { IUserRepository } from "../../dal/user";

// import { IUserModel } from "../../database";

import { BaseController } from "../_base";

import { userService } from '../../services/user';

// interface IUserControllerServices {
//   userRepository: IUserRepository;
//   userService: IUserService;
// }

class UserController {

  async getAllUsers(options?: IPaginationOptions) {

    const users = await userService.getUserList();
    return users;

  }
}

export const userController = new UserController();