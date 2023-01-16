import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginStateService } from 'src/app/components/login/store/login.state.service';
import { Store } from '@ngxs/store';
import { LogoutUser } from 'src/app/components/login/store/login.state.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = '';

  constructor(public router: Router, private loginService: LoginStateService, private store: Store) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const loginUser: any = JSON.parse(localStorage.getItem('loginUserData') || '');
        this.username = loginUser.name;
      }
    });
  }

  logout() {
    const loginUser: any = JSON.parse(localStorage.getItem('loginUserData') || '');
    this.store.dispatch(new LogoutUser({ email: loginUser.email }))
      .subscribe((data) => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
  }
}

