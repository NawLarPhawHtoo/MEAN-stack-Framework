import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SignUpState } from './signup.state';
import { SignUpStateService } from './signup.state.service';


@NgModule({
  imports: [NgxsModule.forRoot([SignUpState])],
  providers: [SignUpStateService]
})

export class SignUpStateModule { }