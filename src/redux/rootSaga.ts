import { all } from 'redux-saga/effects';

import { tagsSaga } from './ducks/tags/saga';
import { tweetSaga } from './ducks/tweet/saga';
import { tweetsSaga } from './ducks/tweets/saga';

export function* rootSaga() {
	yield all([tweetsSaga(), tagsSaga(), tweetSaga()]);
}
