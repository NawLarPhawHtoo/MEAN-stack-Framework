import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from '../../login/store/login.state.service';
import { Select, Store } from '@ngxs/store';
import { LoginState } from '../../login/store/login.state';
import { LogoutUser } from '../../login/store/login.state.action';
import { ILoginStateModel } from '../../login/store/login.state.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router: Router, private loginService: LoginStateService, private store: Store) { }

  logout() {
    const loginUser: any = localStorage.getItem('loginUserData');
    this.store.dispatch(new LogoutUser({ email: loginUser.email }))
      .subscribe((data) => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
  }
}

