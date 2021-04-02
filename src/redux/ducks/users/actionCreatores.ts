import { User } from '../user/contracts/state';
import {
	FetchUsersItemsActionInterface,
	SetUsersItemsActionInterface,
	UsersActionsType,
} from './contracts/actionTypes';

export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
	type: UsersActionsType.SET_ITEMS,
	payload,
});

export type UsersActions = SetUsersItemsActionInterface | FetchUsersItemsActionInterface;
