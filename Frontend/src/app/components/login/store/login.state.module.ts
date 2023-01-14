import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LoginState } from './login.state';
import { LoginStateService } from './login.state.service';


@NgModule({
  imports: [NgxsModule.forRoot([LoginState])],
  providers: [LoginStateService]
})

export class LoginStateModule { }