import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { POST } from 'src/app/shared/constants/post.constant';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
 
  public postList:any = [];

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'description', 'photo', 'created_user_id', 'created_at', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postList = POST;
    console.log('../../../../../assets/p1.jpg')
    this.dataSource = new MatTableDataSource(this.postList);
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
  }

  //post search filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  //post edit
  editPost(postId: number) {
    this.router.navigate(['/post/edit/' + postId])
  }

  //post delete
  deletePost(data:any){
  }

  //post create
  createPost() {
    this.router.navigate(['/post/create']);
  }
}
