import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './components';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list';
import { UserPageComponent } from './components/user-page';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: 'edit/:id',
        component: UserEditComponent
      },
      {
        path: 'change-password/:id',
        component: ChangePasswordComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
