import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ForgotPasswordState } from './forgot-password.state';
import { ForgotPasswordStateService } from './forgot-password.state.service';


@NgModule({
  imports: [NgxsModule.forRoot([ForgotPasswordState])],
  providers: [ForgotPasswordStateService]
})

export class ForgotPasswordStateModule { }