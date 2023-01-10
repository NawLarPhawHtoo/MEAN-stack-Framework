import autobind from 'autobind-decorator';

import { Response, Request, NextFunction } from 'express';
import { IUserModel } from '../../database';

import bcrypt from 'bcrypt';

import { userService } from '../../services/user';

@autobind
class UserController {

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    const users = await userService.getUserList();
    return res.json({
      count: users.length,
      data: users
    });
  }

  async create(req: any, res: Response) {

    let profile: string = req.body.profile;
    if (req.files?.profile?.length > 0) {
      profile = req.files?.profile[0]?.path.replaceAll("\\", "/");
    }
    const userData: IUserModel = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 12),
      gender: req.body.gender,
      role: req.body.role,
      phone: req.body.phone,
      dob: req.body.dob,
      address: req.body.address,
      profile: profile
    } as any;

    const result = await userService.createUser(userData);

    res.json({
      message: 'User created successfully',
      data: result
    });
  }

  async update(req: any, res: Response) {
    const id = +req.params.id
    const checkUser = await userService.getUserById(id);

    if (!checkUser) {
      throw new Error('User not found');
    }
    let profile: string = req.body.profile;
    if (req.files?.profile?.length > 0) {
      profile = req.files?.profile[0]?.path.replaceAll("\\", "/");
    }
    const userData: IUserModel = {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      role: req.body.role,
      phone: req.body.phone,
      dob: req.body.dob,
      address: req.body.address,
      profile: profile
    } as any;
    userData.id = +req.params.id;
    await userService.updateUser(id,userData);

    res.json({
      message: 'User updated successfully',
      data: userData
    });
  }

  async deleteUser(req: Request, res: Response) {
    const user_id = +req.params.id;
    const userData = await userService.getUserById(user_id);
    console.log(userData);

    if (!userData) {
      throw new Error('User is not found');
    }
    await userService.deleteUserById(user_id);

    res.json({
      message: 'User deleted successfully',
      data: userData
    })
  }

  async findUser(req: any, res: Response) {
    const users = await userService.getUserById(+req.params.id);
    console.log(users);
    return res.json({
      message: 'User found successfully',
      data: users
    });
  }
}

export const userController = new UserController();