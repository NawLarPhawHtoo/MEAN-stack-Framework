import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostDeleteDialogComponent } from '../post-delete-dialog';
import { PostListDialogComponent } from '../post-list-dialog';
import { PostsState } from '../../store/posts/post.state';
import { Observable } from 'rxjs';
import { IPostStateModel } from '../../store/posts/post.state.model';
import { Select,Store } from '@ngxs/store';
import { DeletePost, GetPosts, SetSelectedPost } from '../../store/posts/post.state.action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  public storageUrl = environment.storageUrl;
 
  @Select(PostsState.getPostList) posts$: Observable<IPostStateModel[]>;

  public postList: IPostStateModel[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'description', 'photo', 'created_user_id', 'created_at', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private store : Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPosts());

    this.posts$.subscribe((dist:any)=>{
      this.postList = dist;
      this.dataSource = new MatTableDataSource(this.postList);
      this.dataSource.paginator = this.paginator;
    })
  }

  //post search filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  //post edit
  editPost(payload: any) {
    this.store.dispatch(new SetSelectedPost(payload));
    this.router.navigate(['/post/edit/' + payload.id])
  }

  //post delete
  deletePost(data:any){
    const postId = data._id;
    let dialogRef = this.dialog.open(PostDeleteDialogComponent, {
      width: '35%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((dist:any) => {
       if(dist){
        this.store.dispatch(new DeletePost(data.id));
       }
      })
    }

//show post dialog
showPost(data: any) {
  const postId = data._id;
  let dialogRef = this.dialog.open(PostListDialogComponent, {
    width: '35%',
    data: data,
  });
}

  //post create
  createPost() {
    this.router.navigate(['/post/create']);
  }
}
