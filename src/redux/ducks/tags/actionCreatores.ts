import { LoadingStatus } from 'redux/types';
import {
	SetTagsActionInterface,
	SetTagsLoadingStatusActionInterface,
	TagsActionsType,
	FetchTagsActionInterface,
} from './contracts/actionTypes';

import { TagsState } from './contracts/state';

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
	type: TagsActionsType.SET_TAGS,
	payload,
});

export const setTagsLoadingStatus = (payload: LoadingStatus): SetTagsLoadingStatusActionInterface => ({
	type: TagsActionsType.SET_LOADING_STATE,
	payload,
});

export const fetchTags = (): FetchTagsActionInterface => ({
	type: TagsActionsType.FETCH_TAGS,
});

export type TagsActions = SetTagsActionInterface | FetchTagsActionInterface | SetTagsLoadingStatusActionInterface;
