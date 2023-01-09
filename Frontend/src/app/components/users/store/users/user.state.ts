import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from './user.state.action';
import { IUserStateModel } from './user.state.model';
import { UserStateService } from './user.state.service';

// export class IUserStateModel {
//     users!: User[];
//     // selectedUser: User;
// }

@State<IUserStateModel>({
    name: 'users',
    defaults: {
      users: []
    }
})
@Injectable()

export class UsersState {

    constructor(private userService : UserStateService) {
    }

    @Selector()
    static getUserList(state: IUserStateModel) {
        return state.users;
    }

    // @Selector()
    // static getSelectedUser(state: IUserStateModel) {
    //     return state.selectedUser;
    // }

    @Action(GetUsers)
    getUsers({getState, setState}: StateContext<IUserStateModel>) {
        return this.userService.getUser().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                users: result,
            });
        }));
    }

    @Action(AddUser)
    addUser({getState, patchState}: StateContext<IUserStateModel>, {payload}: AddUser) {
        return this.userService.createUser(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                users: [...state.users, result]
            });
        }));
    }

    @Action(UpdateUser)
    updateUser({getState, setState}: StateContext<IUserStateModel>, {payload, id}: UpdateUser) {
        return this.userService.updateUser(payload, id).pipe(tap((result) => {
            const state = getState();
            const userList = [...state.users];
            const userIndex = userList.findIndex(item => item.id === id);
            userList[userIndex] = result;
            setState({
                ...state,
                users: userList,
            });
        }));
    }


    @Action(DeleteUser)
    deleteUser({getState, setState}: StateContext<IUserStateModel>, {id}: DeleteUser) {
        return this.userService.deleteUser(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.users.filter(item => item.id !== id);
            setState({
                ...state,
                users: filteredArray,
            });
        }));
    }
}