import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/constants/user.constant';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteDialogComponent } from '../user-delete-dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { UsersState } from 'src/app/store/users/user.state';
import { Observable } from 'rxjs';
import { User as UserType } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'created_user_id', 'phone', 'dob', 'address', 'created_at', 'updated_at', 'action'];
  public dataSource!: MatTableDataSource<any>;
  public userList: any;
  username = "";
  email = "";
  fromDate = "";
  toDate = "";
  today = new Date();
 

  public dataSubject: any = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // @Select(UsersState) users$!: Observable<UserType[]>;


  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userList = User;
    this.dataSource = new MatTableDataSource(this.userList);
    
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
  }

  deleteUserData(data: any) {
    let dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      width: '40%',
      data: data,
    });
    dialogRef.afterClosed().subscribe();
  }

  onSearch() { }

  onClickUserCreate() {
    this.router.navigate(['/user/create']);
  }
}
