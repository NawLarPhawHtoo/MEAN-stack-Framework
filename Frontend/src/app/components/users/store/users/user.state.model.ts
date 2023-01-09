// export interface IUserStateModel {
//   id: number,
//   name: string,
//   email: string,
//   password: string,
//   created_user_id: string,
//   gender: string,
//   role: string,
//   phone: number,
//   dob: Date,
//   address: string,
//   createdAt: Date,
//   updatedAt: Date
// }

import { User } from "src/app/shared/models/user.model";



export interface IUserStateModel {
  users : User[]
}