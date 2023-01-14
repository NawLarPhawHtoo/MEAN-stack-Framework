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
      .pipe(tap(res => {
        console.log('******Response********',res);
        localStorage.setItem('token', res.token);
      }));
  }
}
