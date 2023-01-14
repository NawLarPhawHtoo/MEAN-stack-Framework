import { User } from "src/app/shared/models/user.model";

export interface IForgotPasswordStateModel {
  users : User[]
  selectedUser: User | null
}