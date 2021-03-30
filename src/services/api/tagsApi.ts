import { axios } from 'core/axios';
import { TagsState } from 'redux/ducks/tags/contracts/state';

export const TagsApi = {
	async fetchTags(): Promise<TagsState['items']> {
		const { data } = await axios.get('tags');
		return data;
	},
};
