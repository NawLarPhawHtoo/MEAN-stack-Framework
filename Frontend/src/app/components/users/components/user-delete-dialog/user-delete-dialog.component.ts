import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.scss']
})
export class UserDeleteDialogComponent implements OnInit {
  id?: string;
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  dob?: string;
  address?: string;

  constructor(
    public dialogRef: MatDialogRef<UserDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDeleteDialogComponent,
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close(null);
  }

  remove() {
    this.dialogRef.close('delete');
  }
}
