import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
  path: '',
  component: SignUpComponent,
  // children: [
  //   {
  //     path: '',
  //     pathMatch: 'full',
  //     redirectTo: 'user-list'
  //   }
  // ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
