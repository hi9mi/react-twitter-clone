import { call, put, takeEvery } from 'redux-saga/effects';

import { TagsApi } from 'services/api/tagsApi';
import { setTags, setTagsLoadingStatus } from './actionCreatores';
import { LoadingStatus } from 'redux/types';
import { TagsActionsType } from './contracts/actionTypes';

export function* fetchTagsRequest(): any {
	try {
		const items = yield call(TagsApi.fetchTags);
		yield put(setTags(items));
	} catch (e) {
		yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
	}
}

export function* tagsSaga() {
	yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
