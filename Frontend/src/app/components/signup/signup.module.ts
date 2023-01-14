import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './signup/signup.component';
import { SignUpStateModule } from './store/signup/signup.state.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SignUpComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    AngularMaterialModule,
    SignUpStateModule
  ]
})
export class SignUpModule { }
