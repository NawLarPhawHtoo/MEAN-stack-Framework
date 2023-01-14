import { User } from "src/app/shared/models/user.model";
import { PasswordReset } from "src/app/shared/models/password.reset.model";

export interface IForgotPasswordUpdateStateModel {
  users: User[]
  selectedUser: User | null
}