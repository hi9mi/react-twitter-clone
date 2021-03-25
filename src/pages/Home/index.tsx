import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import { AddTweetForm } from 'components/AddTweetForm';
import { BackButton } from 'components/BackButton';
import { SearchTextField } from 'components/SearchTextField';
import { SideMenu } from 'components/SideMenu';
import { Tags } from 'components/Tags';
import { Tweet } from 'components/Tweet';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchTags } from 'redux/ducks/tags/actionCreatores';
import { fetchTweets } from 'redux/ducks/tweets/actionCreatores';
import { selectIsTweetsLoading, selectTweetsItems } from 'redux/ducks/tweets/selector';
import { FullTweet } from './components/FullTweet';
import { useHomeStyles } from './theme';

export const Home = (): React.ReactElement => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweets = useSelector(selectTweetsItems);
	const isLoading = useSelector(selectIsTweetsLoading);

	React.useEffect(() => {
		dispatch(fetchTweets());
		dispatch(fetchTags());
	}, [dispatch]);

	return (
		<Container className={classes.wrapper} maxWidth='lg'>
			<Grid container spacing={3} style={{ height: '100%', paddingBottom: 0 }}>
				<Grid style={{ paddingBottom: 0 }} sm={1} md={3} item>
					<SideMenu classes={classes} />
				</Grid>
				<Grid style={{ paddingBottom: 0 }} sm={8} md={6} item>
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
				</Grid>
				<Grid style={{ paddingBottom: 0 }} sm={3} md={3} item>
					<div className={classes.rightSide}>
						<SearchTextField
							variant='outlined'
							placeholder='Поиск по Твиттеру'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
							fullWidth
						/>
						<Tags classes={classes} />
						<Paper className={classes.rightSideBlock}>
							<Paper className={classes.rightSideBlockHeader} variant='outlined'>
								<b>Кого читать</b>
							</Paper>
							<List>
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemAvatar>
										<Avatar
											alt={`Кого читать UserName`}
											src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
										/>
									</ListItemAvatar>
									<ListItemText
										primary='Dock Of Shame'
										secondary={
											<Typography component='span' variant='body2'>
												@FavDockOfShame
											</Typography>
										}
									/>
									<Button color='primary'>
										<PersonAddIcon />
									</Button>
								</ListItem>
								<Divider component='li' />
							</List>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};
