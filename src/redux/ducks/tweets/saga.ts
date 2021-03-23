import { TweetsActionsType, setTweets, setTweetsLoadingState } from './actionCreatores';
import { call, put, takeEvery } from 'redux-saga/effects';

import { LoadingState } from './contracts/state';
import { TweetsApi } from 'services/api/tweetsApi';

export function* fetchTweetsRequest(): any {
	try {
		const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
	} catch (e) {
		yield put(setTweetsLoadingState(LoadingState.ERROR));
	}
}

export function* tweetsSaga() {
	yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
