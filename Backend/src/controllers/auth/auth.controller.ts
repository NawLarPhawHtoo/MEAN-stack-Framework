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
      // console.log(user);
      if (!user)
        return res.status(401).send("Email does not exist");
      console.log('......User Id.....', user.id);
      // let token = await UserDbModel.findOne(user.email)
      // console.log(token);
      // if (!token) {
      //   token = await new UserDbModel({
      //     email: req.body.email,
      //     token: crypto.randomBytes(16).toString("hex"),
      //   }).save();
      // }
      // const link = `${process.env.BASE_URL}/forget-password-update/${user.id}/${token}`;
      // await sendEmail(user.email, "Password reset", link);

      res.status(200).json({
        message: "Password reset link sent to your email account"
      });
    } catch (error) {
      res.send("An error occured");
    }
  }
}

export const authController = new AuthController();