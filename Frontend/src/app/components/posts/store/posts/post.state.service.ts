import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { IPostStateModel } from "./post.state.model";

@Injectable()
export class PostStateService {
  constructor(private httpClient: HttpClient) { }

  public getPost(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.get(`${environment.apiUrl}/posts/all`, { headers: headers });
  }

  public getTopPost(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.get(`${environment.apiUrl}/posts/top-posts`, { headers: headers });
  }

  public createPost(payload: IPostStateModel): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.post(`${environment.apiUrl}/posts/create`, payload, { headers: headers } );
  }

  public updatePost(payload: IPostStateModel, id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.patch(`${environment.apiUrl}/posts/edit/` + id, payload, { headers: headers } );
  }

  public deletePost(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.delete(`${environment.apiUrl}/posts/delete/` + id, { headers: headers } )
  }
}
