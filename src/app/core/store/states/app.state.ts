import { IAppState } from './app.state';
import UserState, { initialUserState } from './user.state';

export interface IAppState {
  users: UserState;
}

export const initialState = () => {
  return {
    users: initialUserState
  };
};
