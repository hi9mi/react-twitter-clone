import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { AddTweetForm } from 'components/AddTweetForm';
import { BackButton } from 'components/BackButton';
import { Tweet } from 'components/Tweet';
import { selectIsTweetsLoading, selectTweetsStateItems } from 'redux/ducks/tweets/selector';
import { FullTweet } from './components/FullTweet';
import { useHomeStyles } from './theme';

export const Home = (): React.ReactElement => {
	const classes = useHomeStyles();
	const tweets = useSelector(selectTweetsStateItems);
	const isLoading = useSelector(selectIsTweetsLoading);

	return (
			<Paper className={classes.tweetsWrapper} variant='outlined'>
				<Paper className={classes.tweetsHeader} variant='outlined'>
					<Route path='/home/:any'>
						<BackButton classes={classes} />
					</Route>
					<Route path={['/home', '/home/tags/search']} exact>
						<Typography variant='h6'>Твиты</Typography>
					</Route>
					<Route path='/home/tweet'>
						<Typography variant='h6'>Твитнуть</Typography>
					</Route>
				</Paper>
				<Route path={['/home', '/home/tags/search']} exact>
					<Paper>
						<div className={classes.addForm}>
							<AddTweetForm classes={classes} />
						</div>
						<div className={classes.addFormBottomLine} />
					</Paper>
				</Route>
				<Route path='/home' exact>
					{isLoading ? (
						<div className={classes.tweetsLoaderCenter}>
							<CircularProgress />
						</div>
					) : (
						tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
					)}
				</Route>
				<Route path='/home/tweet/:id' component={FullTweet} exact />
			</Paper>
	);
};