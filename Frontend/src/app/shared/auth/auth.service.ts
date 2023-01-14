import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
// import { IAuthStateModel } from 'src/app/components/login/store/login.state.model';
import { ILoginStateModel } from 'src/app/components/login/store/login.state.model';
// import { AuthStateService } from 'src/app/components/login/store/login.state.service';
import { LoginStateService } from 'src/app/components/login/store/login.state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {

  user: any;
  public payload: ILoginStateModel;

  protected authUserSubject = new Subject<any>();
  authUser$: Observable<any> = this.authUserSubject.asObservable();

  // constructor(private authService: LoginStateService, private router: Router ) {

  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }


  async isLoggedIn() {
    if (localStorage.getItem('userLoginData')) {
      await this.authUserSubject.next(localStorage.getItem('userLoginData'));
    } else {
      await this.authUserSubject.next(null);
    }
  }
   
  // constructor(private router: Router, private auth: AuthStateService ) {
  //   this.auth.subscribe((data) => {
  //     this.user = data
  //   })
  //  }
}
