import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from 'services/api/tweetsApi';
import { addTweet, setAddFormState, setTweets, setTweetsLoadingState } from './actionCreatores';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState, LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest(): any {
	try {
		const items = yield call(TweetsApi.fetchTweets);
		yield put(setTweets(items));
	} catch (e) {
		yield put(setTweetsLoadingState(LoadingState.ERROR));
	}
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
	try {
		const data: Tweet = {
			_id: Math.random().toString(36).substr(2),
			text: payload,
			user: {
				fullname: 'Test User',
				username: 'test',
				avatarUrl: 'https://source.unsplash.com/random/100x100?5',
			},
		};
		const item = yield call(TweetsApi.addTweet, data);
		yield put(addTweet(item));
	} catch (e) {
		yield put(setAddFormState(AddFormState.ERROR));
	}
}

export function* tweetsSaga() {
	yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
	yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
