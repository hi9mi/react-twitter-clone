import { RootState } from 'redux/store';
import { LoadingStatus } from 'redux/types';
import { AddFormState, TweetsState } from './contracts/state';

export const selectTweetsState = (state: RootState): TweetsState => state.tweets;

export const selectLoadingStatus = (state: RootState): LoadingStatus => selectTweetsState(state).LoadingStatus;

export const selectAddFormState = (state: RootState): AddFormState => selectTweetsState(state).addFormState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
	selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetsStateItems = (state: RootState) => selectTweetsState(state).items;
