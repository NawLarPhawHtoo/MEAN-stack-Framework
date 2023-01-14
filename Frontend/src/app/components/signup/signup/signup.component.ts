import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/directives/must-match.validator';
import { SignUpUser } from '../store/signup/signup.state.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$')]],
      confirmPwd: ['', [Validators.required, MustMatch]]
    },
      {
        validator: MustMatch('password', 'confirmPwd')
      });
  }

  get myForm() {
    return this.signUpForm.controls;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  clearData() {
    this.signUpForm.reset();
  }

  signUpUser() {
    const formData = new FormData();
    formData.append('name', this.signUpForm.controls['name'].value);
    formData.append('email', this.signUpForm.controls['email'].value);
    formData.append('password', this.signUpForm.controls['password'].value);

    this.store.dispatch(new SignUpUser(formData)).subscribe((res:any) => {
      console.log(res);
      this.router.navigate(['/'])
    });
  }
}

