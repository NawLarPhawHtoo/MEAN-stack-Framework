import { User } from "src/app/shared/models/user.model"
// import { Auth } from "src/app/shared/models/auth.model"

export interface IAuthStateModel {
    auth : User[]
    selectedAuth: User | null
}