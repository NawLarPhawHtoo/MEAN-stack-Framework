import { UpdateUser } from './../../store/users/user.state.action';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteDialogComponent } from '../user-delete-dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { DeleteUser, GetUsers, SetSelectedUser } from '../../store/users/user.state.action';
import { IUserStateModel } from '../../store/users/user.state.model';
import { UsersState } from '../../store/users/user.state';
import { UserListDialogComponent } from '../user-list-dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public storageUrl = environment.storageUrl;

  @Select(UsersState.getUserList) users$: Observable<IUserStateModel[]>;

  displayedColumns: string[] = ['profile', 'name', 'email', 'phone', 'dob', 'address', 'created_at', 'updated_at', 'action'];
  public dataSource!: MatTableDataSource<any>;
  public userList: IUserStateModel[] = [];
  today = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private store: Store) { }

  async ngOnInit() {
    const users = this.store.dispatch(await new GetUsers());
    users.subscribe((dist) => {
      if (dist.users.users.length > 0) {
        this.userList = dist.users.users;
        this.dataSource = new MatTableDataSource(this.userList);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  deleteUserData(data: any) {
    let dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      width: '40%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((dist: any) => {
      if (dist) {
        this.store.dispatch(new DeleteUser(data.id));
      }
    });
  }

  editUserData(payload: User,) {
    this.store.dispatch(new SetSelectedUser(payload));
    this.router.navigate(['/user/edit/' + payload.id])
  }

  changePassword(payload: User,) {
    this.store.dispatch(new SetSelectedUser(payload));
    this.router.navigate(['/user/change-password/' + payload.id])
  }

  showUser(data: any) {
    const userId = data._id;
    let dialogRef = this.dialog.open(UserListDialogComponent, {
      width: '35%',
      // height: '600px',
      data: data,
    })
  }

  onClickUserCreate() {
    this.router.navigate(['/user/create']);
  }
}

