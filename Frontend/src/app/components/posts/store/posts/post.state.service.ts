import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { IPostStateModel } from "./post.state.model";

@Injectable()
export class PostStateService {
  constructor(private httpClient: HttpClient) { }

  public getPost(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/posts/all`);
  }

  public getTopPost(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/posts/top-posts`);
  }

  public createPost(payload: IPostStateModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/posts`, payload);
  }

  public updatePost(payload: IPostStateModel, id: number): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/posts` + id, payload);
  }

  public deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/posts` + id)
  }
}
