import { User } from "src/app/shared/models/user.model";

export interface IUserStateModel {
  users: User[]
  selectedUser: User | null
}