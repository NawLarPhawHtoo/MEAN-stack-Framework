import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {  SetSelectedUser, SignUpUser } from './signup.state.action';
import { ISignUpStateModel } from './signup.state.model';
import { SignUpStateService } from './signup.state.service';

@State<ISignUpStateModel>({
    name: 'user',
    defaults: {
      users: [],
      selectedUser: null
    }
})
@Injectable()

export class SignUpState {

    constructor(private signupService : SignUpStateService) {
    }

    @Action(SignUpUser)
    signUpUser({getState, patchState}: StateContext<ISignUpStateModel>, {payload}: SignUpUser) {
        return this.signupService.signUpUser(payload).pipe(tap((result) => {
            console.log('*****Rseult********',result);
            const state = getState();
            patchState({
                users: [...state.users, result]
            });
        }));
    }

    @Action(SetSelectedUser)
    setSelectedUserId({getState, setState}: StateContext<ISignUpStateModel>, {payload}: SetSelectedUser) {
        const state = getState();
        setState({
            ...state,
            selectedUser: payload
        });
    }
}