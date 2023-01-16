import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-user-list-dialog',
  templateUrl: './user-list-dialog.component.html',
  styleUrls: ['./user-list-dialog.component.scss']
})
export class UserListDialogComponent {

  public imgUrl = environment.storageUrl + this.data.profile

  id: number;
  name: string;
  gender: string;
  role: string;
  phone: string;
  dob: Date;
  profile: string;
  address: string;
  created_at: Date;


  constructor(
    public dialogRef: MatDialogRef<UserListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserListDialogComponent
  ) { }

  ngOnInit(): void { }
}
