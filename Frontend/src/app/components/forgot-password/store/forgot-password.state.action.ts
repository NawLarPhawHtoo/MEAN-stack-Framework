import { User } from "src/app/shared/models/user.model";

export class ForgotPassword {
    static readonly type = '[PasswordReset] Add';

    constructor(public payload: any) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}