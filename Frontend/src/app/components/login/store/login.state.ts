import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { SetSelectedUser, LoginUser } from './login.state.action';
import { ILoginStateModel } from './login.state.model';
import { LoginStateService } from './login.state.service';

@State<ILoginStateModel>({
    name: 'loginuser',
    defaults: {
        users: [],
        selectedUser: null
    }
})
@Injectable()

export class LoginState {

    constructor(private loginService: LoginStateService) {
    }

    @Action(LoginUser)
    loginUser({ getState, patchState }: StateContext<ILoginStateModel>, { payload }: LoginUser) {
        return this.loginService.loginUser(payload).pipe(tap((result) => {
            console.log('*****Result*************', result);
            const state = getState();
            console.log('****** State *******',state);
            patchState({
                users: [...state.users, result]
            });
        }));
    }

    @Action(SetSelectedUser)
    setSelectedUserId({ getState, setState }: StateContext<ILoginStateModel>, { payload }: SetSelectedUser) {
        const state = getState();
        setState({
            ...state,
            selectedUser: payload
        });
    }
}