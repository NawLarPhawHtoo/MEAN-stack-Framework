import { PasswordResetDbModel } from './../../database/models/password.reset';
// import { sendEmail } from './../../utils/sendEmail';
// import { IPasswordResetModel } from './../../database/models/password.reset';
// import { UserDbModel } from './../../database/models/user.model';
import autobind from "autobind-decorator";
import { Response } from "express";
import bcrypt, { compareSync } from "bcrypt";
import crypto from "crypto";
import jwt from 'jsonwebtoken';
import { authService } from "../../services/auth/auth.service";
import { IUserModel, UserDbModel } from "../../database";
// import { PasswordResetDbModel,IPasswordResetModel } from '../../database/models/password.reset';
import { sendEmail } from './../../utils/sendEmail';
import { STRING } from 'sequelize';
// import { userService } from "../../services/user";

@autobind

class AuthController {

  async signup(req: any, res: Response) {

    const userData: IUserModel = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 12),
    } as any;

    const result = await authService.signupUser(userData);

    res.json({
      message: 'User sign up successfully',
      data: result
    });
  }

  async login(req: any, res: Response): Promise<any> {
    const email = req.body.email as any;
    const userData = await authService.loginUser(email);
    console.log(userData);

    if (!userData) {
      throw new Error('User is not found');
    }
    if (!compareSync(req.body.password, userData.password)) {
      return res.status(401).send({
        success: false,
        message: 'Incorrect Password'
      })
    }

    const payload = {
      email: userData.email,
      id: userData.id
      // email: await bcrypt.hash(userData.email, 12),
      // id: await bcrypt.hash(userData.id, 12)
    }
    const token = jwt.sign(payload, 'secrect', { expiresIn: '1d' });

    return res.status(200).send({
      success: true,
      message: 'Login Successfully!',
      users: userData,
      token: token
    });
  }

  async logout(req: any, res: Response): Promise<any> {
    req.session = null;
    return res.json({ "message": "Logout Successfully" });
  };

  async forgotPassword(req: any, res: Response): Promise<any> {
    try {
      const email = req.body.email as any;
      const user = await authService.forgotPassword(email);
      if (!user)
        return res.status(401).send("Email does not exist");
      console.log(user.id);
      const id: number = user.id;
      let data: any = await UserDbModel.findByPk(id);

      if (!data.token) {
        const email = req.body.email;
        console.log(email);
        const token = crypto.randomBytes(16).toString('hex')
        console.log('....Token.....', token);

        data = await new PasswordResetDbModel({
          email: email,
          token: token,
        }).save();
      }
      console.log('....Data.....', data);
      const link = `${process.env.BASE_URL}/forgot-password-update/${user.id}/${data.token}`;
      await sendEmail(user.email, "Password reset", link);

      res.status(200).json({
        message: "Password reset link sent to your email account"
      });
    } catch (error) {
      res.send("An error occured");
    }
  }

  async resetPassword(req: any, res: Response): Promise<any> {
    try {
      let id = req.params.id;
      if (isNaN(id)) {
        id = Number(req.params.id)
      }
      console.log(id);
      const user = await authService.resetPassword(id);
    
      if (!user) return res.status(401).send("User Id does not exist");

      const token = req.params.token;
      console.log(token);

      const passwordReset = await PasswordResetDbModel.findOne({
        where: { token: token }
      });
      console.log(passwordReset);

      if (!passwordReset) return res.status(401).send("Invalid link or expired");
      console.log(req.body.password);

      user.password = await bcrypt.hash(req.body.password, 12);
      await user.save();
      console.log(user);
      
      res.json({
        message: "Password reset sucessfully."
      });
    } catch (error) {
      res.send("An error occured");
    }
  }

  async changePassword(req: any, res: Response): Promise<any> {
    try {
      let id = req.params.id;
      if (isNaN(id)) {
        id = Number(req.params.id)
      }
      console.log(id);
      await authService.changePassword(id)
        .then(async (user: any) => {
          if (!user) {
            return res.status(404).send({
              success: false,
              message: 'Could not find user'
            })
          }

          const token = req.params.token;
          console.log(token);

          const passwordReset = await PasswordResetDbModel.findOne({
            where: { token: token }
          });
          console.log(passwordReset);

          if (!token) return res.status(401).send("Unauthorized");

          console.log('User Password', user.password);
          if (!compareSync(req.body.oldPassword, user.password)) {
            return res.send({
              success: false,
              message: 'Incorrect password'
            });
          }

          if (compareSync(req.body.newPassword, user.password)) {
            return res.send({
              success: false,
              message: 'Current Password and New Password are same.'
            });
          }

          user.password = await bcrypt.hash(req.body.newPassword, 12);
          console.log(user.password);
          await user.save();
          await passwordReset?.destroy();
          res.json({ message: "Password Change Successfully!" });
        })
    } catch (error) {
      res.send("An error occured");
    }
  }

}

export const authController = new AuthController();