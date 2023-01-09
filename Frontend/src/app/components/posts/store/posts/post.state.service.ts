import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostStateService {
    constructor(private httpClient: HttpClient) { }

    public getPost(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/posts`);
    }

    public createPost(payload: Post[]): Observable<any> {
        return this.httpClient.post(`${environment.apiUrl}/posts`, payload);
    }

    public updatePost(payload: Post[], id: any): Observable<any> {
        return this.httpClient.put(`${environment.apiUrl}/posts/` + id, payload)
    }

    public DeletePost(id: any): Observable<any> {
        return this.httpClient.delete(`${environment.apiUrl}/posts/` + id)
    }
}