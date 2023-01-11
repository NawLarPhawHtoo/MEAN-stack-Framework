import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './login.state';
import { AuthStateService } from './login.state.service';

@NgModule({
    imports: [NgxsModule.forRoot([AuthState])],
    providers: [AuthStateService]
})

export class AuthStateModule { }