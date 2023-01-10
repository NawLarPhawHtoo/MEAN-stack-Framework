import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-delete-dialog',
  templateUrl: './post-delete-dialog.component.html',
  styleUrls: ['./post-delete-dialog.component.scss']
})
export class PostDeleteDialogComponent {
  id?: string;
  title?: string;
  description?: string;

  constructor(
    public dialogRef: MatDialogRef<PostDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostDeleteDialogComponent,
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
