import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';
import { LoadingStatus } from 'redux/types';

import { AuthApi } from 'services/api/authApi';
import { setUserData, setUserLoadingStatus } from './actionCreatores';
import { FetchSignInActionInterface, UserActionsType } from './contracts/actionTypes';
import { User } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface): Generator<StrictEffect, void, User> {
	try {
		const { data } = yield call(AuthApi.sighIn, payload);
		yield put(setUserData(data));
		console.log(data);

		window.localStorage.setItem('token', data.token);
	} catch (e) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR));
	}
}

export function* userSaga() {
	yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
