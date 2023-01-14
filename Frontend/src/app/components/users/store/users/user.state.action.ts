import { User } from "src/app/shared/models/user.model";
import { IUserStateModel } from "./user.state.model";

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: any) {
    }
}

export class GetUsers {
    static readonly type = '[User] Get';
}
export class UpdateUser {
    static readonly type = '[User] Update';

    constructor(public payload: any, public id: number) {
    }
}

export class DeleteUser {
    static readonly type = '[User] Delete';

    constructor(public id: number) {
    }
}

export class ChangePassword {
    static readonly type = '[User] Change';
    constructor(public id: number,public payload: any) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}