import autobind from 'autobind-decorator';

import { Response, Request, NextFunction } from 'express';

import { IUserModel } from '../../database';

import bcrypt from 'bcrypt';

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
    await userService.updateUser(id, userData);

    res.json({
      message: 'User updated successfully',
      data: userData
    });
  }

  async deleteUser(req: Request, res: Response) {
    const user_id = +req.params.id;
    const userData = await userService.getUserById(user_id);

    if (!userData) {
      return res.status(404).send("User is not found");
    }
    await userService.deleteUserById(user_id);

    res.json({
      message: 'User deleted successfully',
      data: userData
    })
  }

  async findUser(req: any, res: Response) {
    const users = await userService.getUserById(+req.params.id);

    return res.json({
      message: 'User found successfully',
      data: users
    });
  }

  async changePassword(req: any, res: Response) {
    try {
      const user_id = +req.params.id;

      const user: any = await userService.getUserById(user_id);
      console.log(user);

      const { oldPassword, newPassword, confirmPassword } = req.body as any;

      console.log(oldPassword);
      console.log(newPassword);
      console.log(confirmPassword);

      //Check required fields
      if (!oldPassword || !newPassword || !confirmPassword) {
        res.json({ message: "Please fill in all fields." });
      }
      //Check passwords match
      if (newPassword !== confirmPassword) {
        res.json({ message: "New password do not match." });
      } else {
        //Validation Passed
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        console.log(isMatch);
        if (isMatch) {
          //Update password for user with new password
          bcrypt.genSalt(12, (err, salt) =>
            bcrypt.hash(newPassword, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              user.password = hash;
              user.save();
            })
          );
          res.json({ message: "Password Changes Successfully!", data: user, status: 1 });
        } else {
          res.json({ message: "Current Password is not match." })
        }
      }
    } catch (err) {
      res.json({ message: "Password does not match" });
    }
  }
}

export const userController = new UserController();