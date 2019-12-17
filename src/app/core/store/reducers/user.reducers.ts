import { logging } from 'protractor';

import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from '../actions/user.action';
import { EUserActions, getUsers } from './../actions/user.action';
import UserState, { initialUserState } from './../states/user.state';

export const initialState = initialUserState();

const reducer = createReducer(
  initialState,
  on(UserActions.getUsers, (state: UserState) => {
    return { ...state, loading: true, loaded: false };
  }),
  on(UserActions.getUsersSuccess, (state: UserState, { users }) => {
    return { ...state, users, loading: false, loaded: true};
  }),
  on(UserActions.getUsersFail, (state: UserState) => {
    return { ...state, loading: false, loaded: false };
  }),
  on(UserActions.selectUser, (state: UserState, { user }) => {
    return { ...state, selectedUser: user };
  })
);

export function userReducers(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
