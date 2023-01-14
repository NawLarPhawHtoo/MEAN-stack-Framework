import { User } from "src/app/shared/models/user.model";

export class SignUpUser {
    static readonly type = '[User] Add';

    constructor(public payload: any) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}