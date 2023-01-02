import autobind from 'autobind-decorator';

import { Response, Request } from 'express';

import { userService } from '../../services/user';

@autobind
class UserController {

async getAllUsers(req: Request, res: Response) {
    const users = await userService.getUserList();
    return res.json({
      count: users.length,
      data: users
    });
  }

  async create(req: Request, res: Response) {
    const userData = req.body as any;

    const result = await userService.createUser(userData);

    res.json({
      message: 'User created successfully',
      data: result
    });
  }

  async update(req: Request, res: Response) {
    const checkUser = await userService.getUserById(+req.params.id);

    if (!checkUser) {
      throw new Error('User not found');
    }
    const userData = req.body as any;
    userData.id = +req.params.id;
    await userService.updateUser(userData);
    // res.end('true');
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
}

export const userController = new UserController();