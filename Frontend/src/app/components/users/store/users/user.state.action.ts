import { User } from "src/app/shared/models/user.model";


export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User[]) {
    }
}

export class GetUsers {
    static readonly type = '[User] Get';
}

export class UpdateUser {
    static readonly type = '[User] Update';

    constructor(public payload: User[], public id: number) {
    }
}

export class DeleteUser {
    static readonly type = '[User] Delete';

    constructor(public id: number) {
    }
}