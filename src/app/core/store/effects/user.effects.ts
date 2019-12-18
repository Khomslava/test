import { selectUsersLoaded } from './../selectors/user.selectors';
import { Injectable } from '@angular/core';

import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, switchMap, catchError, withLatestFrom, filter, tap } from 'rxjs/operators';

import { IUser } from './../../models/user.model';
import { IAppState } from '../states/app.state';
import { UsersService } from './../../services/users.service';
import { EUserActions } from './../actions/user.action';
import * as UserActions from './../actions/user.action';

@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUserActions.GetUsers),
      withLatestFrom(this.store.select(selectUsersLoaded)),
      filter(([action, loaded]) => !loaded),
      switchMap(() =>
        this.usersService.getUsers()
          .pipe(
            map((users: IUser[]) => UserActions.getUsersSuccess({users})),
            catchError((error: Error) => of(UserActions.getUsersFail()))
          )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUserActions.GetUser),
      switchMap(({id}) =>
        this.usersService.getUserById(id)
          .pipe(
            map((user: IUser) => UserActions.selectUser({ user })),
            catchError((error: Error) => of(UserActions.getUserFail()))
          )
      )
    )
  );

  constructor(
    private usersService: UsersService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}

