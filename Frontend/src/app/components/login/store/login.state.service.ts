import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IAuthStateModel } from "./login.state.model";

@Injectable({
    providedIn: 'root'
}) 
export class AuthStateService {
    authUserSubject: any;

    

    constructor(private httpClient: HttpClient) {  }
//   authUser$: Observable<any> = this.authUserSubject.asObservable();

    async isLoggedIn() {
        if (localStorage.getItem('userLoginData')) {
          await this.authUserSubject.next(localStorage.getItem('userLoginData'));
          console.log(this.authUserSubject)
        } else {
          await this.authUserSubject.next(null);
        }
      }
    //   readonly headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    login(payload: IAuthStateModel): Observable<any> {
        return this.httpClient.post(`${environment.localUrl}/login`, payload)
    }

    logout(): Observable<any> {
        return this.httpClient.post(`${environment.localUrl}/logout`, {})
    }

}
