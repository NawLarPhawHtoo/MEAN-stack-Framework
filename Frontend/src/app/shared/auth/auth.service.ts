import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ILoginStateModel } from 'src/app/components/login/store/login.state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  user: any;
  public payload: ILoginStateModel;

  protected authUserSubject = new Subject<any>();
  authUser$: Observable<any> = this.authUserSubject.asObservable();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }


  async isLoggedIn() {
    if (localStorage.getItem('token')) {
      await this.authUserSubject.next(localStorage.getItem('token'));
    } else {
      await this.authUserSubject.next(null);
    }
  }
}
