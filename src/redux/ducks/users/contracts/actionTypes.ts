import { Action } from 'redux';

import { User } from 'redux/ducks/user/contracts/state';

export enum UsersActionsType {
	SET_ITEMS = 'user/SET_ITEMS',
	FETCH_ITEMS = 'user/FETCH_ITEMS',
	SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
	type: UsersActionsType.SET_ITEMS;
	payload: User[];
}

export interface FetchUsersItemsActionInterface extends Action<UsersActionsType> {
	type: UsersActionsType.FETCH_ITEMS;
}
