import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUser } from '../../store/users/user.state.action';
import { Store } from '@ngxs/store';
// import { MustMatch } from 'src/app/validators/must-match.validator';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  confirmView: boolean = false;
  value!: number;
  label!: string;
  profileImage: any;
  Imageloaded: boolean = false;
  imgFile: any;
  userInfo: any;
  typeOption = [
    { enum: 'Admin' },
    { enum: 'User' }
  ];
  userForm!: FormGroup;
  public userId: number = 0;
  public userData: any;
  public existingUser: any;
  public isEditUser: boolean = true;
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
      confirmPwd: ['', [Validators.required]],
      type: [''],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      dob: [''],
      address: [''],
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
    // if (this.confirmView == true) {
    //   this.userForm.controls['name'].enable();
    //   this.userForm.controls['email'].enable();
    //   this.userForm.controls['password'].enable();
    //   this.userForm.controls['confirmPwd'].enable();
    //   this.userForm.controls['address'].enable();
    //   this.userForm.controls['type'].enable();
    //   this.userForm.controls['dob'].enable();
    //   this.userForm.controls['phone'].enable();
    //   this.confirmView = false;
    // } else {
      this.userForm.reset();
    // }
  }

  confirmUser() {
      // const formData = new FormData();
      // formData.append('name', this.userForm.controls['name'].value);
      // formData.append('email', this.userForm.controls['email'].value);
      // formData.append('password', this.userForm.controls['password'].value);
      // formData.append('type', this.userForm.controls['type'].value);
      // formData.append('phone', this.userForm.controls['phone'].value);
      // formData.append('address', this.userForm.controls['address'].value);
      // formData.append('dob', this.userForm.controls['dob'].value);
      // formData.append('profile', this.imgFile);
      // formData.append('created_user_id', this.userInfo);

      this.store.dispatch(new AddUser(this.userForm.value)).subscribe(()=>{
        this.router.navigate(['/user'])
      });
    

    // if (this.userForm.valid) {
    //   this.userForm.controls['name'].disable();
    //   this.userForm.controls['email'].disable();
    //   this.userForm.controls['password'].disable();
    //   this.userForm.controls['confirmPwd'].disable();
    //   this.userForm.controls['address'].disable();
    //   this.userForm.controls['type'].disable();
    //   this.userForm.controls['dob'].disable();
    //   this.userForm.controls['phone'].disable();
    //   this.userForm.controls['profile'].disable();
    //   this.confirmView = true;
    // }
  }

  OnDateChange(event: any) {
    this.pickDate = event;
  }
}
