import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordUpdateComponent } from './forgot-password-update/forgot-password-update.component';

const routes: Routes = [
  {
    path: 'forgot-password-update/:id/:token',
    component: ForgotPasswordUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordUpdateRoutingModule { }
