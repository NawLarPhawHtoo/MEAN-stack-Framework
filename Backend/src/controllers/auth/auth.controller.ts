import autobind from "autobind-decorator";
import { Response } from "express";
import bcrypt, { compareSync } from "bcrypt";
import crypto from "crypto";
import jwt from 'jsonwebtoken';
import { authService } from "../../services/auth/auth.service";
import { IUserModel, UserDbModel,PasswordResetDbModel} from "../../database";

import { sendEmail } from './../../utils/sendEmail';

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

      const id: number = user.id;
      let data: any = await UserDbModel.findByPk(id);

      if (!data.token) {
        const email = req.body.email;
        const token = crypto.randomBytes(16).toString('hex');

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
  
      const user = await authService.resetPassword(id);
    
      if (!user) return res.status(401).send("User Id does not exist");

      const token = req.params.token;

      const passwordReset = await PasswordResetDbModel.findOne({
        where: { token: token }
      });

      if (!passwordReset) return res.status(401).send("Invalid link or expired");

      user.password = await bcrypt.hash(req.body.password, 12);
      await user.save();
      
      res.json({
        message: "Password reset sucessfully."
      });
    } catch (error) {
      res.send("An error occured");
    }
  }
}

export const authController = new AuthController();