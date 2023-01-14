import { User } from "src/app/shared/models/user.model";

import { PasswordReset } from "src/app/shared/models/password.reset.model";

export class ForgotPasswordUpdate {
    static readonly type = '[PasswordReset] Find';

    constructor(public id:number,public token:string, public payload: any) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}
