import { User } from "src/app/shared/models/user.model";

export interface ILoginStateModel {
  users: User[]
  selectedUser: User | null
}