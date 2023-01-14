import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IForgotPasswordStateModel } from './forgot-password.state.model';

@Injectable()
export class ForgotPasswordStateService {
  
constructor(private httpClient: HttpClient) { }

  forgotPassword(payload: IForgotPasswordStateModel): Observable<any> {
    return this.httpClient.post(`${environment.authApiUrl}/forgot-password`, payload);
  }
}
