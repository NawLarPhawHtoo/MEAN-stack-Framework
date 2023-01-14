import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(mod => mod.SignUpModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/forgot-password/forgot-password.module').then(mod => mod.ForgotPasswordModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/forgot-password-update/forgot-password-update.module').then(mod => mod.ForgotPasswordUpdateModule)
  },
  {
    path: 'top-page',
    loadChildren: () => import('./components/top-page/top-page.module').then(mod => mod.TopPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./components/users/users.module').then(mod => mod.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    loadChildren: () => import('./components/posts/post.module').then(mod => mod.PostModule),
    canActivate: [AuthGuard]
  },
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
