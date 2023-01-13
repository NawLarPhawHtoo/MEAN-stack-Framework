import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { IPostStateModel } from "./post.state.model";

@Injectable()
export class PostStateService {
  constructor(private httpClient: HttpClient) { }

  readonly headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  public getPost(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/posts/all`, { headers: this.headers });
  }

  public getTopPost(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/posts/top-posts`, { headers: this.headers });
  }

  public createPost(payload: IPostStateModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/posts/create`, payload, { headers: this.headers } );
  }

  public updatePost(payload: IPostStateModel, id: number): Observable<any> {
    return this.httpClient.patch(`${environment.apiUrl}/posts/edit/` + id, payload, { headers: this.headers } );
  }

  public deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/posts/delete/` + id, { headers: this.headers } )
  }
}
