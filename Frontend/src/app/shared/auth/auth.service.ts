import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  user: any;
   
  constructor() { }
}
