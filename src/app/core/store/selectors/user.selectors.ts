
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppState } from './../states/app.state';
import UserState from '../../store/states/user.state';

const selectUsers = createFeatureSelector<UserState>('users');

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectUsersLoading = createSelector(
  selectUsers,
  (state: UserState) => state.loading
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);
