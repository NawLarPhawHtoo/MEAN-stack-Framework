import { User } from "src/app/shared/models/user.model";

export interface IForgotPasswordUpdateStateModel {
  users: User[]
  selectedUser: User | null
}