import { IUser } from './../../../core/models/user.model';

export default class UserState {
  users: IUser[];
  selectedUser: IUser;
  loading: boolean;
  loaded: boolean;
}

export const initialUserState = () => {
  return {
    users: null,
    selectedUser: null,
    loading: false,
    loaded: false,
  };
};
