import { Injectable } from '@angular/core';

import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

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
      mergeMap(() =>
        this.usersService.getUsers()
          .pipe(
            map((users: IUser[]) => UserActions.getUsersSuccess({users})),
            catchError((error: Error) => of(UserActions.getUsersFail()))
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

