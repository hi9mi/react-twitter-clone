import CircularProgress from '@material-ui/core/CircularProgress';
import { Tweet } from 'components/Tweet';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTweetData, setTweetData } from 'redux/ducks/tweet/actionCreatores';
import { selectIsTweetLoaded, selectIsTweetLoading, selectTweetData } from 'redux/ducks/tweet/selector';
import { useHomeStyles } from '../theme';

export const FullTweet: React.FC = (): React.ReactElement | null => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweetData = useSelector(selectTweetData);
	const isLoaded = useSelector(selectIsTweetLoaded);
	const isLoading = useSelector(selectIsTweetLoading);
	const params: { id?: string } = useParams();
	const id = params.id;

	React.useEffect(() => {
		if (id) {
			dispatch(fetchTweetData(id));
		}

		return () => {
			dispatch (setTweetData(undefined))
		}
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<div className={classes.tweetsLoaderCenter}>
				<CircularProgress />
			</div>
		);
	}

	if (tweetData) {
		return <Tweet classes={classes} {...tweetData} />;
	}

	return null;
};
