import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthStateService } from '../../login/store/login.state.service';
import { LoginStateService } from '../../login/store/login.state.service';
import {  Store } from '@ngxs/store';
// import { Logout } from '../../login/store/login.state.action';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (public router: Router, private loginService: LoginStateService, private store: Store) { }


  // logout() {
  //   this.store.dispatch(new Logout())
  //   .subscribe(() => {
  //     localStorage.removeItem('userLoginData');
  //     this.router.navigate(['/']);
  //   })
  // }
    // this.authSvc.logout().then((dist: any) => {
    //   localStorage.removeItem('userId');
    //   localStorage.clear();
    //   this.authSvc.isLoggedIn();
    //   this.router.navigate(['/login']);
    // })
}  

