import { call, put, takeEvery } from 'redux-saga/effects';

import { LoadingStatus } from 'redux/types';
import { TweetsApi } from 'services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';
import { setTweetData, setTweetLoadingStatus } from './actionCreatores';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';

export function* fetchTwetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface): any {
	try {
		const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
		yield put(setTweetData(data));
	} catch (e) {
		yield put(setTweetLoadingStatus(LoadingStatus.ERROR));
	}
}

export function* tweetSaga() {
	yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTwetDataRequest);
}
