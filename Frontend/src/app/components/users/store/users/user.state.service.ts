import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserStateModel } from './user.state.model';

@Injectable()
export class UserStateService {

  readonly headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  constructor(private httpClient: HttpClient) { }


  public getUser(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/users/all`, { headers: this.headers });
  }

  createUser(payload: IUserStateModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/users/create`, payload, { headers: this.headers });
  }

  updateUser(payload: any, id: number): Observable<any> {
    return this.httpClient.patch(`${environment.apiUrl}/users/edit/` + id, payload, { headers: this.headers })
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/users/delete/` + id, { headers: this.headers })
  }

  // findUser(id:number): Observable<any> {
  //   return this.httpClient.get(`${environment.apiUrl}/users/find/` + id, { headers: this.headers });
  // }

  changePassword(id: number,payload: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/users/change-password/` + id, payload, { headers: this.headers })
  }

}
