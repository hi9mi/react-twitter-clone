import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';
import { LoadingStatus } from 'redux/types';

import { AuthApi } from 'services/api/authApi';
import { setUserData, setUserLoadingStatus } from './actionCreatores';
import { FetchSignInActionInterface, FetchSignUpActionInterface, UserActionsType } from './contracts/actionTypes';
import { User } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface): Generator<StrictEffect, void, User> {
	try {
		const { data } = yield call(AuthApi.sighIn, payload);
		yield put(setUserData(data));
		window.localStorage.setItem('token', data.token);
	} catch (e) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR));
	}
}
export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface): Generator<StrictEffect, void, User> {
	try {
		yield put(setUserLoadingStatus(LoadingStatus.LOADING));
		yield call(AuthApi.sighUp, payload);
		yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
	} catch (e) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR));
	}
}

export function* userSaga() {
	yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
	yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}
