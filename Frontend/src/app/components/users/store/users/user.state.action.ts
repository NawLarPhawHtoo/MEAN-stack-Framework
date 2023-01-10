import { User } from "src/app/shared/models/user.model";
import { IUserStateModel } from "./user.state.model";

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: IUserStateModel) {
    }
}

export class GetUsers {
    static readonly type = '[User] Get';
}

export class UpdateUser {
    static readonly type = '[User] Update';

    constructor(public payload: IUserStateModel, public id: number) {
    }
}

export class DeleteUser {
    static readonly type = '[User] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }
}