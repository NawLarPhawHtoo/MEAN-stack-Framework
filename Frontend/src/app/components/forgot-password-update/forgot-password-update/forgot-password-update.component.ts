import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ForgotPasswordUpdate } from '../store/forgot-password-update.state.action';

@Component({
  selector: 'app-forgot-password-update',
  templateUrl: './forgot-password-update.component.html',
  styleUrls: ['./forgot-password-update.component.scss']
})
export class ForgotPasswordUpdateComponent implements OnInit {

  forgotPasswordUpdateForm!: FormGroup;
  id: number;
  token: string;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.forgotPasswordUpdateForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$')]]
    });
  }

  get myForm() {
    return this.forgotPasswordUpdateForm.controls;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  clearData() {
    this.forgotPasswordUpdateForm.reset();
  }

  forgotPasswordUpdate() {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.token = this.activatedRoute.snapshot.params['token'];

    const formData = new FormData();
    formData.append('password', this.forgotPasswordUpdateForm.controls['password'].value);

    this.store.dispatch(new ForgotPasswordUpdate(this.id, this.token, formData)).subscribe(() => {
      alert('Password Reset Successful');
      this.router.navigate(['/']);
    });
  }
}

