import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/components/login/store/login.state.service';
import { Store } from '@ngxs/store';
import { LogoutUser } from 'src/app/components/login/store/login.state.action';


@Component({
  selector: 'app-header',
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

