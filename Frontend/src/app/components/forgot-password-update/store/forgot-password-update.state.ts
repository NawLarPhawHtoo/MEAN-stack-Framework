
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ForgotPasswordUpdate, SetSelectedUser } from './forgot-password-update.state.action';
import { IForgotPasswordUpdateStateModel } from './forgot-password-update.state.model';
import { ForgotPasswordUpdateStateService } from './forgot-password-update.state.service';


@State<IForgotPasswordUpdateStateModel>({
  name: 'forgotPasswordUpdate',
  defaults: {
    users: [],
    selectedUser: null
  }
})
@Injectable()

export class ForgotPasswordUpdateState {

  constructor(private forgotPasswordUpdateService: ForgotPasswordUpdateStateService) {
  }

  @Action(ForgotPasswordUpdate)
  forgotPasswordUpdate({ getState, patchState }: StateContext<IForgotPasswordUpdateStateModel>, { payload, id, token }: ForgotPasswordUpdate) {
    return this.forgotPasswordUpdateService.forgotPasswordUpdate(id, token, payload).pipe(tap((result) => {
      const state = getState();
      patchState({
          users: [...state.users, result]
      });
      // const state = getState();
      // const userList = [...state.users];
      // const userIndex = userList.findIndex(item => item.id === payload.id);
      // userList[userIndex] = result;
      // setState({
      //   ...state,
      //   users: userList,
      // });
    }));
  }

  @Action(SetSelectedUser)
  setSelectedUserId({ getState, setState }: StateContext<IForgotPasswordUpdateStateModel>, { payload }: SetSelectedUser) {
    const state = getState();
    setState({
      ...state,
      selectedUser: payload
    });
  }
}