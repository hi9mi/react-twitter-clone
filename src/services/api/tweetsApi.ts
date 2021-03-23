import { TweetsState } from 'redux/ducks/tweets/contracts/state';
import axios from 'axios';

export const TweetsApi = {
	fetchTweets(): Promise<TweetsState['items']> {
		return axios.get('http://localhost:3001/items').then(({ data }) => data);
	},
};
