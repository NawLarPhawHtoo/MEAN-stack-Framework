import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UsersState } from '../../store/users/user.state';
import { UpdateUser } from '../../store/users/user.state.action';
import { IUserStateModel } from '../../store/users/user.state.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Select(UsersState.getSelectedUser) selectedUser: Observable<IUserStateModel>;

  profileImage: any;
  imgFile: any;
  typeOption = [
    { enum: 'admin' },
    { enum: 'user' }
  ];
  pickDate: any;
  today = new Date();
  userData: any;
  public user: any;
  public userForm!: FormGroup;

  constructor(
    private router: Router,
    private store: Store,
    private activatedRoute : ActivatedRoute
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      role: new FormControl(),
      phone: new FormControl('', [Validators.required,
      Validators.pattern("^[0-9]{11}$")
      ]),
      dob: new FormControl(''),
      address: new FormControl(''),
      profile: new FormControl('')
    });
  }

  ngOnInit(): void {

    this.selectedUser.subscribe((user: any) => {
      if (user) {
        this.userForm.controls['name'].patchValue(user.name);
        this.userForm.controls['email'].patchValue(user.email);
        this.userForm.controls['role'].patchValue(user.role);
        this.userForm.controls['phone'].patchValue(user.phone);
        this.userForm.controls['dob'].patchValue(user.dob);
        this.userForm.controls['address'].patchValue(user.address);
        this.profileImage = 'http://localhost:3000/' + user.profile;
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
    const userId = this.activatedRoute.snapshot.params['id'];
    const formData = new FormData();
    formData.append('name', this.userForm.controls['name'].value);
    formData.append('email', this.userForm.controls['email'].value);
    formData.append('role', this.userForm.controls['role'].value);
    formData.append('phone', this.userForm.controls['phone'].value);
    formData.append('address', this.userForm.controls['address'].value);
    formData.append('dob', this.userForm.controls['dob'].value);
    this.imgFile ? formData.append('profile', this.imgFile) : "";
   
    this.store.dispatch(new UpdateUser(formData,userId)).subscribe(()=>{
      this.router.navigate(['/user/user-list'])
    })
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
