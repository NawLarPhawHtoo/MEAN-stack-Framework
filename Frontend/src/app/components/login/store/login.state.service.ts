import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginStateModel } from './login.state.model';

@Injectable()
export class LoginStateService {

  constructor(private httpClient: HttpClient) { }

  loginUser(payload: ILoginStateModel): Observable<any> {
    return this.httpClient.post<{ token: string }>(`${environment.authApiUrl}/login`, payload)
      .pipe(tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('loginUserData', JSON.stringify(res.users));
      }));
  }

  logoutUser(payload: ILoginStateModel): Observable<any> {
    return this.httpClient.post<{ email: string }>(`${environment.authApiUrl}/logout`, payload)
      .pipe(tap(res => {
        localStorage.removeItem('token');
      }));
  }
}
