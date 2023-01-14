import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IForgotPasswordUpdateStateModel } from './forgot-password-update.state.model';

@Injectable()
export class ForgotPasswordUpdateStateService {
  
constructor(private httpClient: HttpClient) { }

  forgotPasswordUpdate(id:number,token:string,payload: IForgotPasswordUpdateStateModel): Observable<any> {
    return this.httpClient.post(`${environment.authApiUrl}/forgot-password-update/${id}/${token}`, payload);
  }
}
