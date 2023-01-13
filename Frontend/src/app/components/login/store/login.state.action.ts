import { User } from "src/app/shared/models/user.model";
import { IUserStateModel } from "../../users/store/users/user.state.model";


export class Login {
    static readonly type = '[User] Add';

    constructor(public payload: any) { }
}

export class Logout {
    static readonly type = '[User]';

    constructor() { }
}

export class GetAuth {
    static readonly type = '[User] Get';
}