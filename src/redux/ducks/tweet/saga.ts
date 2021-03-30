import { call, put, takeEvery } from 'redux-saga/effects';

import { TweetsApi } from 'services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';
import { setTweetData, setTweetLoadingState } from './actionCreatores';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';
import { LoadingState } from './contracts/state';

export function* fetchTwetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface): any {
	try {
		const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
		yield put(setTweetData(data));
	} catch (e) {
		yield put(setTweetLoadingState(LoadingState.ERROR));
	}
}

export function* tweetSaga() {
	yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTwetDataRequest);
}
