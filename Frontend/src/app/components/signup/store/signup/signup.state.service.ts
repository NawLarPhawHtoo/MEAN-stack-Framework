import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISignUpStateModel } from './signup.state.model';

@Injectable()
export class SignUpStateService {
  
constructor(private httpClient: HttpClient) { }

  signUpUser(payload: ISignUpStateModel): Observable<any> {
    return this.httpClient.post(`${environment.authApiUrl}/signup`, payload);
  }
}
