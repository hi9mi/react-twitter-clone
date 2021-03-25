import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTweetData, setTweetData } from 'redux/ducks/tweet/actionCreatores';
import { selectIsTweetLoading, selectTweetData } from 'redux/ducks/tweet/selector';
import { useHomeStyles } from '../theme';

export const FullTweet: React.FC = (): React.ReactElement | null => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweetData = useSelector(selectTweetData);
	const isLoading = useSelector(selectIsTweetLoading);
	const params: { id?: string } = useParams();
	const id = params.id;

	React.useEffect(() => {
		if (id) {
			dispatch(fetchTweetData(id));
		}

		return () => {
			dispatch(setTweetData(undefined));
		};
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<div className={classes.tweetsLoaderCenter}>
				<CircularProgress />
			</div>
		);
	}

	if (tweetData) {
		return (
			<Paper className={classes.fullTweet}>
				<div className={classes.tweetsHeaderUser}>
					<Avatar
						className={classes.TweetAvatar}
						alt={`Аватарка пользователя ${tweetData.user.fullname}`}
						src={tweetData.user.avatarUrl}
					/>
					<Typography>
						<b>{tweetData.user.fullname}</b>&nbsp;
						<div>
							<span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
							<span className={classes.tweetUserName}>·</span>&nbsp;
							<span className={classes.tweetUserName}>1 ч</span>
						</div>
					</Typography>
				</div>
				<Typography className={classes.fullTweetText} gutterBottom>
					{tweetData.text}
				</Typography>
			</Paper>
		);
	}

	return null;
};
