import { LoginFormProps } from 'pages/Signin/components/LoginModal';
import {
	FetchSignInActionInterface,
	SetUserDataActionInterface,
	SetUserLoadingStatusActionInterface,
	UserActionsType,
} from './contracts/actionTypes';
import { UserState } from './contracts/state';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
	type: UserActionsType.SET_USER_DATA,
	payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
	type: UserActionsType.FETCH_SIGN_IN,
	payload,
});

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStatusActionInterface => ({
	type: UserActionsType.SET_LOADING_STATE,
	payload,
});

export type UserActions = SetUserDataActionInterface | SetUserLoadingStatusActionInterface;
