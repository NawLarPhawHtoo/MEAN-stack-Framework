import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserStateModel } from './user.state.model';

@Injectable()
export class UserStateService {

  constructor(private httpClient: HttpClient) { }


  public getUser(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.get(`${environment.apiUrl}/users/all`, { headers: headers });
  }

  createUser(payload: IUserStateModel): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.post(`${environment.apiUrl}/users/create`, payload, { headers: headers });
  }

  updateUser(payload: any, id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.patch(`${environment.apiUrl}/users/edit/` + id, payload, { headers: headers })
  }

  deleteUser(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.delete(`${environment.apiUrl}/users/delete/` + id, { headers: headers })
  }

  changePassword(id: number,payload: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.post(`${environment.apiUrl}/users/change-password/` + id, payload, { headers: headers })
  }

}
