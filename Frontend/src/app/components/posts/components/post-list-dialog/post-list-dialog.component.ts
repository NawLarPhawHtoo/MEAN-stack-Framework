import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-list-dialog',
  templateUrl: './post-list-dialog.component.html',
  styleUrls: ['./post-list-dialog.component.scss']
})
export class PostListDialogComponent {

  title: string;
  description: string;
  content: string;
  author: string;
  references: string;
  image: string;
  created_at: string;

  constructor(
    public dialogRef: MatDialogRef<PostListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostListDialogComponent,
  ) { }

  ngOnInit(): void {
    
  }
}
