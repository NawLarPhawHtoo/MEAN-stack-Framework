import { Auth } from "src/app/shared/models/auth.model";
import { IAuthStateModel } from "./login.state.model";

export class AddAuth {
    static readonly type = '[Auth] Add';

    constructor(public payload: any) { }
}

export class GetAuth {
    static readonly type = '[Auth] Get';
    
    constructor(public payload: any) { }
}