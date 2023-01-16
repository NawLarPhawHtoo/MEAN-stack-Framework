import { ChangePassword } from './../../store/users/user.state.action';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/directives/must-match.validator';
import { LogoutUser } from 'src/app/components/login/store/login.state.action';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public passwordForm!: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$')]],
      confirmPassword: ['', [Validators.required, MustMatch]]
    },
      {
        validator: MustMatch('newPassword', 'confirmPassword')
      });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.passwordForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const id = this.activatedRoute.snapshot.params['id'];
      console.log(id);

      const payload = {
        oldPassword: this.passwordForm.controls['oldPassword'].value,
        newPassword: this.passwordForm.controls['newPassword'].value,
        confirmPassword: this.passwordForm.controls['confirmPassword'].value
      };
      this.store.dispatch(new ChangePassword(id, payload)).subscribe(() => {
        const loginUser = JSON.parse(localStorage.getItem('loginUserData') || '');
        alert('Change Password Successful');
        if (loginUser.id === parseInt(id)) {
          this.store.dispatch(new LogoutUser({ email: loginUser.email }))
            .subscribe((data) => {
              localStorage.removeItem('token');
              this.router.navigate(['/']);
            })
        } else {
          this.router.navigate(['/'])
        }
      });
    }
  }

  clearForm() {
    this.passwordForm.reset();
  }
}
