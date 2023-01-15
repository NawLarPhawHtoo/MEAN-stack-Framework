import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { SetSelectedUser, LoginUser, LogoutUser } from './login.state.action';
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
  static setSelectedUserId(setSelectedUserId: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private loginService: LoginStateService) {
  }

  @Action(LoginUser)
  loginUser({ getState, setState }: StateContext<ILoginStateModel>, { payload }: LoginUser) {
    return this.loginService.loginUser(payload).pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        users: result.users,
      });
    }));
  }

  @Action(LogoutUser)
  logoutUser({ getState, setState }: StateContext<ILoginStateModel>, { payload }: LogoutUser) {
    return this.loginService.logoutUser(payload).pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        users: [],
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