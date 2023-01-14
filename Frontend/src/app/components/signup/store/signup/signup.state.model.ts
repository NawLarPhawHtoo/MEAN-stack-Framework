import { User } from "src/app/shared/models/user.model";

export interface ISignUpStateModel {
  users : User[]
  selectedUser: User | null
}