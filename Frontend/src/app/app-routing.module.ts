import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./components/users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./components/posts/post.module').then(mod => mod.PostModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }