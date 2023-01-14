import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from '../forgot-password';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: [
      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent
      // },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'forgot-password'
      // }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
