import { PathLocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as path from 'path';
import { catchError, tap } from 'rxjs';
import { AddUser } from '../../users/store/users/user.state.action';
import { IUserStateModel } from '../../users/store/users/user.state.model';
import { Login } from './login.state.action';
import { Logout } from './login.state.action';
import { IAuthStateModel } from './login.state.model';
import { AuthStateService } from './login.state.service';

@State<IAuthStateModel>({
    name: 'data',
    defaults: {
        auth: [],
        selectedAuth: null
    }
})

@Injectable()

export class AuthState {
    constructor(private authService: AuthStateService) { }

    @Selector()
    static getAuthList(state: IAuthStateModel) {
        return state.auth;
    }

    @Action(Login)
    Login({ getState, setState }: StateContext<IAuthStateModel>, { payload }: Login) {
        return this.authService.login(payload).pipe(tap((result) => {
            console.log(result)
            localStorage.setItem('userLoginData', JSON.stringify(result) )
            localStorage.setItem('token', result.token)
            const state = getState();
            setState({
                ...state,
                auth: result.data,
            });
        }));
    }

    @Action(Logout)
    Logout({ dispatch}: StateContext<IAuthStateModel>) {
        return this.authService.logout().pipe(tap((result) => {
            dispatch({
                auth: [],
                selectedAuth: null
            })
        }))
    }

}