import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ForgotPassword, SetSelectedUser } from './forgot-password.state.action';
import { IForgotPasswordStateModel } from './forgot-password.state.model';
import { ForgotPasswordStateService } from './forgot-password.state.service';

@State<IForgotPasswordStateModel>({
  name: 'forgotPassword',
  defaults: {
    users: [],
    selectedUser: null
  }
})
@Injectable()

export class ForgotPasswordState {

  constructor(private forgotPasswordService: ForgotPasswordStateService) {
  }

  @Action(ForgotPassword)
  forgotPassword({ getState, patchState }: StateContext<IForgotPasswordStateModel>, { payload }: ForgotPassword) {
    return this.forgotPasswordService.forgotPassword(payload).pipe(tap((result) => {
      const state = getState();
      patchState({
        users: [...state.users, result]
      });
    }));
  }

  @Action(SetSelectedUser)
  setSelectedUserId({ getState, setState }: StateContext<IForgotPasswordStateModel>, { payload }: SetSelectedUser) {
    const state = getState();
    setState({
      ...state,
      selectedUser: payload
    });
  }
}