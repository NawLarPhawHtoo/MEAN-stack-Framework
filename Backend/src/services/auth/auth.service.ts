import { IUserModel, UserDbModel } from "../../database";

class AuthService {

  async signupUser(userObj: Partial<IUserModel>): Promise<UserDbModel> {
    const createUser = await UserDbModel.create({ ...userObj, created_at: new Date().toISOString() });
    console.log(createUser);
    return createUser;
  }

  loginUser(email: string): Promise<any> {
    return UserDbModel.findOne({
      where: {
        email: email,
      }
    }) as any;
  }

  logoutUser(email: string): Promise<any> {
    return UserDbModel.findOne({
      where: {
        email: email
      }
    }) as any;
  }

  forgotPassword(email: string): Promise<any> {
    return UserDbModel.findOne({
      where: {
        email: email,
      }
    }) as any;
  }
}

export const authService = new AuthService();