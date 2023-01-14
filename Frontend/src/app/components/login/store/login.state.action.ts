import { User } from "src/app/shared/models/user.model";

export class LoginUser {
    static readonly type = '[User] Find';

    constructor(public payload: any) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}