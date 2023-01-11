import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IAuthStateModel } from '../store/login.state.model';
import { AuthState } from '../store/login.state';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginErrMsg = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', [Validators.required]),
      rememberme: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    const payload = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }
    // this.authSvc.login(payload).then(dist => {
    //   localStorage.setItem('token', dist.token);
    //   localStorage.setItem('userLoginData', JSON.stringify(dist.user));
    //   this.router.navigate(["/posts-list"]);
    // }).catch(err => {
    //   this.loginErrMsg = `Email or password is incorrect...`;
    // }
    // )
  }

  // email: string;
  // password: string;
  // formData: FormGroup;

  // constructor(
  //   private http:HttpClient,
  //   private router: Router,
  //   private store: Store
  // ) { }

  // ngOnInit(): void {
  //   this.formData = new FormGroup({
  //     email: new FormControl(""),
  //     password: new FormControl(""),
  //   });
  // }

  // onClickLogin(data: any) {
  //   // this.email = data.email;
  //   // this.password = data.password;

  //   // this.store.dispatch(data)
  //   //   .subscribe((data: any) => {
  //   //     localStorage.setItem("isUserLoggedIn", "true");
  //   //     localStorage.setItem("token", data.token);
  //   //     localStorage.setItem("loginUser", JSON.stringify(data.users));
  //   //     this.router.navigate(['/']);
  //   //   })
  // }



}
