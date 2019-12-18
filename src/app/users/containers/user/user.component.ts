import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as UserActions from '../../../core/store/actions/user.action';
import UserState from '../../../core/store/states/user.state';
import { selectSelectedUser } from './../../../core/store/selectors/user.selectors';
import { IUser } from './../../../core/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user$: Observable<IUser>;
  userId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<UserState>
  ) {
    this.userId = this.route.snapshot.params.id;
    this.user$ = store.pipe(
      select(selectSelectedUser),
      tap((user: IUser) => {
        if (!user) {
          this.store.dispatch(UserActions.getUser({ id: +this.userId }));
        }
      })
    );
  }

  navigateToUsersList() {
    this.router.navigate([`/users`]);
  }
}
