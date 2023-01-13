import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AuthStateModule } from './store/login.state.module';

const COMPONENTS = [
    LoginComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        AuthStateModule
    ]
})

export class LoginModule { }