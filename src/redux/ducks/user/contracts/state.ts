import { LoadingStatus } from 'redux/types';

export interface User {
	_id?: string;
	email: string;
	password: string;
	username: string;
	fullname: string;
	confirmHash: string;
	confirmed?: boolean;
	location?: string;
	about?: string;
	website?: string;

	token?: string;
}

export interface UserState {
	data: User | undefined;
	status: LoadingStatus;
}
