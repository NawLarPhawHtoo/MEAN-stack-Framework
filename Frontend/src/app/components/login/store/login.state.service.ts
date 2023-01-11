import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { IAuthStateModel } from "./login.state.model";

@Injectable() 
export class AuthStateService {
    constructor(private httpClient: HttpClient) { }

    protected authUserSubject = new Subject<any>();

    // async isLoggedIn() {
    //     if(localStorage.getItem('userLoginData'))
    // }

    public getAuth(): Observable<any> {
        return this.httpClient.get(`${environment.localUrl}/login`);
    }

    public createAuth(payload: IAuthStateModel): Observable<any> {
        return this.httpClient.post(`${environment.localUrl}/login/create`, payload)
    }
    
}
