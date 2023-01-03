import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header';
const routes: Routes = [
  {
    path:'',
    component: HeaderComponent,
    pathMatch: 'full'
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