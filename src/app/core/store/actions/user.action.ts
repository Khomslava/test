import { createAction, props } from '@ngrx/store';

import { IUser } from './../../../core/models';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFail = '[User] Get Users Fail',
  SelectUser = '[User] Selected Users'
}

export const getUsers = createAction(
  EUserActions.GetUsers
);

export const getUsersSuccess = createAction(
  EUserActions.GetUsersSuccess,
  props<{ users: IUser[] }>()
);

export const getUsersFail = createAction(
  EUserActions.GetUsersFail
);

export const selectUser = createAction(
  EUserActions.SelectUser,
  props<{ user: IUser }>()
);
