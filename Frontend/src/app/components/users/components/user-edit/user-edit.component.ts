import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UsersState } from '../../store/users/user.state';
import { SetSelectedUser } from '../../store/users/user.state.action';
import { IUserStateModel } from '../../store/users/user.state.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{

  @Select(UsersState.getSelectedUser) selectedUser: Observable<IUserStateModel>;

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
  public edituser:boolean =  false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
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

    this.selectedUser.subscribe((user:any) => {
      if (user) {
        this.userForm.patchValue({
          name: user.name
        });
      } else {
        this.edituser = false;
      }
    })
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

  }

  OnDateChange(event: any) {
    this.pickDate = event;
  }
}
