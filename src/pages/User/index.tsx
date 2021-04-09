import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { BackButton } from 'components/BackButton';
import { useHomeStyles } from '../Home/theme';
import { TabsBar } from './components/TabsBar';
import { ProfileBLock } from './components/ProfileBLock';
import { fetchTweets } from 'redux/ducks/tweets/actionCreatores';
import { selectIsTweetsLoading, selectTweetsStateItems } from 'redux/ducks/tweets/selector';
import { User } from 'redux/ducks/user/contracts/state';
import { AuthApi } from 'services/api/authApi';
import { RouteComponentProps } from 'react-router';

export const UserPage: React.FC<RouteComponentProps<{id: string}>> = ({match}) => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweets = useSelector(selectTweetsStateItems);
	const isLoading = useSelector(selectIsTweetsLoading);
	const [userData, setUserData] = React.useState<User | undefined>();

	React.useEffect(() => {
		const userId = match.params.id;
		dispatch(fetchTweets());
		if (userId) {
			AuthApi.getUserInfo(userId).then(({ data }) => {
				setUserData(data);
			});
		}
	}, [dispatch, match.params.id]);

	return (
		<Paper className={classes.tweetsWrapper} variant='outlined'>
			<Paper className={classNames(classes.tweetsHeader, classes.profileHeader)} variant='outlined'>
				<BackButton classes={classes} />
				<div>
					<Typography variant='h6'>
						{!userData ? <Skeleton variant='text' width={100} /> : userData?.fullname}
					</Typography>
					<Typography color='textSecondary' variant='body1' display='block' gutterBottom>
						{!userData ? <Skeleton variant='text' width={60} /> : `${tweets.length} твита`}
					</Typography>
				</div>
			</Paper>
			<div className={classes.profileBackground} />
			<ProfileBLock userData={userData} />
			<TabsBar tweets={tweets} isLoading={isLoading} />
		</Paper>
	);
};
