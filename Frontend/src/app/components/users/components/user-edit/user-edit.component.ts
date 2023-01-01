import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{
  confirmView: boolean = false;
  profileImage: any;
  Imageloaded: boolean = false;
  imgFile: any;
  userInfoId: any;
  typeOption = [
    { enum: 'Admin' },
    { enum: 'User' }
  ];
  pickDate: any;
  today = new Date();
  userData: any;
  public userID: any;
  public user: any;
  public userForm!: FormGroup;
  public existingUser: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      type: new FormControl(),
      phone: new FormControl('', [Validators.required,
      Validators.pattern("^[0-9]{11}$")
      ]),
      dob: new FormControl(''),
      address: new FormControl('')
    });
  }

  ngOnInit(): void {
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
    if (this.confirmView == true) {
      this.userForm.controls['name'].enable();
      this.userForm.controls['email'].enable();
      this.userForm.controls['address'].enable();
      this.userForm.controls['type'].enable();
      this.userForm.controls['dob'].enable();
      this.userForm.controls['phone'].enable();
      this.confirmView = false;
    } else {
      this.userForm.reset();
    }
  }

  confirmUser() {
  }

  OnDateChange(event: any) {
    this.pickDate = event;
  }
}
