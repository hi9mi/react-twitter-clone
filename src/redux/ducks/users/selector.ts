import { RootState } from 'redux/store';
import { UsersState } from './contracts/state';

export const selectUsers = (state: RootState): UsersState => state.users;

export const selectUsersItems = (state: RootState): UsersState['items'] => state.users.items;
