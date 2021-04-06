import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { LoadingStatus } from 'redux/types';
import { TweetsApi } from 'services/api/tweetsApi';
import { addTweet, removeTweet, setAddFormState, setTweets, setTweetsLoadingStatus } from './actionCreatores';
import { FetchAddTweetActionInterface, RemoveTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState, Tweet } from './contracts/state';

export function* fetchTweetsRequest(): Generator<StrictEffect, void, Tweet[]> {
	try {
		const items = yield call(TweetsApi.fetchTweets);
		yield put(setTweets(items));
	} catch (e) {
		yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
	}
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): Generator<StrictEffect, void, Tweet> {
	try {
		const item = yield call(TweetsApi.addTweet, payload);
		yield put(addTweet(item));
	} catch (e) {
		yield put(setAddFormState(AddFormState.ERROR));
	}
}

export function* fetchRemoveTweetRequest({
	payload,
}: RemoveTweetActionInterface): Generator<StrictEffect, void, Tweet> {
	try {
		yield call(TweetsApi.removeTweet, payload);
	} catch (e) {
		yield put(setAddFormState(AddFormState.ERROR));
		alert('Ошибка при удаление твита');
	}
}

export function* tweetsSaga() {
	yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
	yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
	yield takeEvery(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
