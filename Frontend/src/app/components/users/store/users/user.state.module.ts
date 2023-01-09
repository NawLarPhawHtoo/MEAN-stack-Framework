import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './user.state';
import { UserStateService } from './user.state.service';


@NgModule({
  imports: [NgxsModule.forRoot([UsersState])],
  providers: [UserStateService]
})

export class UserStateModule { }