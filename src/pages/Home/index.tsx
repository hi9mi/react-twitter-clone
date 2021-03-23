import { selectIsTweetsLoading, selectTweetsItems } from 'redux/ducks/tweets/selector';
import { useDispatch, useSelector } from 'react-redux';

import { AddTweetForm } from 'components/AddTweetForm';
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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchTextField } from 'components/SearchTextField';
import { SideMenu } from 'components/SideMenu';
import { Tweet } from 'components/Tweet';
import Typography from '@material-ui/core/Typography';
import { fetchTweets } from 'redux/ducks/tweets/actionCreatores';
import { useHomeStyles } from './theme';

export const Home = (): React.ReactElement => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweets = useSelector(selectTweetsItems);
	const isLoading = useSelector(selectIsTweetsLoading)
	
	React.useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);

	return (
		<Container className={classes.wrapper} maxWidth='lg'>
			<Grid style={{ height: '100%' }} container spacing={3}>
				<Grid sm={1} md={3} item>
					<SideMenu classes={classes} />
				</Grid>
				<Grid sm={8} md={6} item>
					<Paper className={classes.tweetsWrapper} variant='outlined'>
						<Paper className={classes.tweetsHeader} variant='outlined'>
							<Typography variant='h6'>Главная</Typography>
						</Paper>
						<Paper>
							<div className={classes.addForm}>
								<AddTweetForm classes={classes} />
							</div>
							<div className={classes.addFormBottomLine} />
						</Paper>
						{isLoading ? <div className={classes.tweetsLoaderCenter}><CircularProgress/></div> : tweets.map((tweet) => (
							<Tweet key={tweet._id} classes={classes} text={tweet.text} user={tweet.user} />
						))}
					</Paper>
				</Grid>
				<Grid sm={3} md={3} item xs={3}>
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
						<Paper className={classes.rightSideBlock}>
							<Paper className={classes.rightSideBlockHeader} variant='outlined'>
								<b>Актуальные темы</b>
							</Paper>
							<List>
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary='Санкт-Петербург'
										secondary={
											<Typography component='span' variant='body2'>
												Твитов: 3 331
											</Typography>
										}
									/>
								</ListItem>
								<Divider component='li' />
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary='#короновирус'
										secondary={
											<Typography component='span' variant='body2'>
												Твитов: 163 122
											</Typography>
										}
									/>
								</ListItem>
								<Divider component='li' />
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary='Беларусь'
										secondary={
											<Typography component='span' variant='body2'>
												Твитов: 13 554
											</Typography>
										}
									/>
								</ListItem>
								<Divider component='li' />
							</List>
						</Paper>
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
