import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ForgotPasswordUpdateRoutingModule } from './forgot-password-update-routing.module';
import { ForgotPasswordUpdateComponent } from './forgot-password-update/forgot-password-update.component';
import { ForgotPasswordUpdateStateModule } from './store/forgot-password-update.state.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  ForgotPasswordUpdateComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPasswordUpdateRoutingModule,
    AngularMaterialModule,
    ForgotPasswordUpdateStateModule
  ]
})
export class ForgotPasswordUpdateModule { }
