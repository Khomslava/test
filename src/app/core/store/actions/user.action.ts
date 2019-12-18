import { createAction, props } from '@ngrx/store';

import { IUser } from './../../../core/models';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFail = '[User] Get Users Fail',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFail = '[User] Get User Fail',
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

export const getUser = createAction(
  EUserActions.GetUser,
  props<{ id: number }>()
);

export const getUserFail = createAction(
  EUserActions.GetUserFail
);

export const selectUser = createAction(
  EUserActions.SelectUser,
  props<{ user: IUser }>()
);
