import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as UserActions from '../../../core/store/actions/user.action';
import UserState from '../../../core/store/states/user.state';
import { selectUserList, selectUsersLoading } from './../../../core/store/selectors/user.selectors';
import { IUser } from './../../../core/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  usersLoading$: Observable<boolean>;

  constructor(private store: Store<UserState>) {
    this.users$ = store.pipe(select(selectUserList));
    this.usersLoading$ = store.pipe(select(selectUsersLoading));
  }

  ngOnInit() {
    this.store.dispatch(UserActions.getUsers());
  }

  selectUser(user: IUser) {
    this.store.dispatch(UserActions.selectUser({user}));
  }
}
