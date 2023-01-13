import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IAuthStateModel } from '../store/login.state.model';
import { AuthState } from '../store/login.state';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/models/auth.model';
import { Login } from '../store/login.state.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Select(AuthState.getAuthList) auth$: Observable<IAuthStateModel[]>;

  @Input() auth: any = [];

  public authUser: Auth[] = [];

  loginForm!: FormGroup;
  loginErrMsg = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
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


  onClickLogin() {
    const formData = new FormData();
    formData.append('email', this.loginForm.controls['email'].value);
    formData.append('password', this.loginForm.controls['password'].value)

    this.store.dispatch(new Login(formData))
    .subscribe((result) => {
      this.router.navigate(['/top-page']);
    })
  }
}
