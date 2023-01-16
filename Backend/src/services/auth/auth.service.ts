import { IPasswordResetModel, IUserModel, PasswordResetDbModel, UserDbModel } from "../../database";

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

  getUserById(user_id: number): Promise<any> {
    return UserDbModel.findByPk(user_id) as any;
  }

  forgotPassword(email: string): Promise<any> {
    return UserDbModel.findOne({
      where: {
        email: email,
      }
    }) as any;
  }

  resetPassword(user_id: number): Promise<any> {
    return UserDbModel.findByPk(user_id) as any;
  }

  getUserByToken(token: string): Promise<any> {
    return PasswordResetDbModel.findOne({
      where: {
        token: token
      }
    }) as any;
  }

  deleteUserToken(token: string): Promise<any> {
    return PasswordResetDbModel.destroy({
      where: {
        token: token
      }
    }) as any;
  }

  async resetUser(userObj: Partial<IPasswordResetModel>): Promise<PasswordResetDbModel> {
    const createReset = await PasswordResetDbModel.create({ ...userObj, created_at: new Date().toISOString() });
    return createReset;
  }
}

export const authService = new AuthService();