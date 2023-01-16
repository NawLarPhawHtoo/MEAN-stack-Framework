import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ForgotPassword } from '../store/forgot-password.state.action';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
  }

  get myForm() {
    return this.forgotPasswordForm.controls;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  clearData() {
    this.forgotPasswordForm.reset();
  }

  forgotPassword() {
    const formData = new FormData();
    formData.append('email', this.forgotPasswordForm.controls['email'].value);
    this.store.dispatch(new ForgotPassword(formData)).subscribe(() => {
      alert('Password reset link sent to your email account');
      this.router.navigate(['/forgot-password-update']);
    });
  }
}

