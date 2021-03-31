import { Tweet } from 'redux/ducks/tweets/contracts/state';
import { LoadingStatus } from 'redux/types';

export interface TweetState {
	data?: Tweet;
	LoadingStatus: LoadingStatus;
}
