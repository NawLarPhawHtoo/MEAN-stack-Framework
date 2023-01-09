import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './header';
const routes: Routes = [
  {
    path:'',
    component: TopPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'top-page',
    loadChildren: () => import('./header/Top-Page.module').then(mod => mod.TopPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/users/users.module').then(mod => mod.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }