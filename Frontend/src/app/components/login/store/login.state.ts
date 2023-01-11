import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';
import { AddUser } from '../../users/store/users/user.state.action';
import { AddAuth, GetAuth } from './login.state.action';
import { IAuthStateModel } from './login.state.model';
import { AuthStateService } from './login.state.service';

@State<IAuthStateModel>({
    name: 'auth',
    defaults: {
        auth: []
    }
})

@Injectable()

export class AuthState{
    constructor(private authService: AuthStateService) { }

    @Selector()
    static getAuthList(state: IAuthStateModel) {
        return state.auth;
    }

    @Action(GetAuth)
    getAuth({getState, setState}: StateContext<IAuthStateModel>) {
        return this.authService.getAuth().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                auth: result.data,
            });
        }));
    }

    @Action(AddAuth)
    addAuth({getState, patchState}: StateContext<IAuthStateModel>, { payload}: AddAuth) {
        return this.authService.createAuth(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                auth: [...state.auth, result]
            });
        }));
    }
}