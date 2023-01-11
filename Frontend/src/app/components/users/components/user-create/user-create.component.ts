import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUser } from '../../store/users/user.state.action';
import { Store } from '@ngxs/store';
import { MustMatch } from 'src/app/shared/directives/must-match.validator';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  profileImage: any;
  imgFile: any;
  typeOption = [
    { enum: 'admin' },
    { enum: 'user' }
  ];
  userForm!: FormGroup;
  submitted: boolean = false;
  pickDate: any;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store : Store
  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$')]],
      confirmPwd: ['', [Validators.required,MustMatch]],
      role: [''],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      dob: [''],
      address: [''],
      profile: ['', [Validators.required]]
    },
    {
      validator: MustMatch('password', 'confirmPwd')
    });
  }

  get myForm() {
    return this.userForm.controls;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  clearData() {
      this.userForm.reset();
  }

  confirmUser() {
    const formData = new FormData();
    formData.append('name', this.userForm.controls['name'].value);
    formData.append('email', this.userForm.controls['email'].value);
    formData.append('password', this.userForm.controls['password'].value);
    formData.append('role', this.userForm.controls['role'].value);
    formData.append('phone', this.userForm.controls['phone'].value);
    formData.append('address', this.userForm.controls['address'].value);
    formData.append('dob', this.userForm.controls['dob'].value);
    formData.append('profile', this.imgFile);

      this.store.dispatch(new AddUser(formData)).subscribe(()=>{
        this.router.navigate(['/user'])
      });
  }

  imageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgFile = file;
      const reader = new FileReader();
      reader.onload = e => this.profileImage = reader.result;
      reader.readAsDataURL(file);
    }
  }

  OnDateChange(event: any) {
    this.pickDate = event;
  }
}
