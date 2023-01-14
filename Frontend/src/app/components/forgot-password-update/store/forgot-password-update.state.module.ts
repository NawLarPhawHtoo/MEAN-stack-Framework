import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ForgotPasswordUpdateState } from './forgot-password-update.state';
import { ForgotPasswordUpdateStateService } from './forgot-password-update.state.service';

@NgModule({
  imports: [NgxsModule.forRoot([ForgotPasswordUpdateState])],
  providers: [ForgotPasswordUpdateStateService]
})

export class ForgotPasswordUpdateStateModule { }