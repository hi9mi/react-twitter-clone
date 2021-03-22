import {
	Container,
	createStyles,
	Grid,
	InputBase,
	makeStyles,
	Paper,
	Theme,
	Typography,
	withStyles,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { SideMenu } from '../components/SideMenu';
import { Tweet } from '../components/Tweet';

export const useHomeStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		height: '100vh',
	},
	logo: {
		margin: '10px 0',
	},
	logoIcon: {
		fontSize: 36,
	},
	sideMenuList: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 230,
	},
	sideMenuListItem: {
		cursor: 'pointer',
		'&:hover': {
			'& div': {
				backgroundColor: 'rgba(29, 161, 242, 0.1)',
				'& h6': {
					color: theme.palette.primary.main,
				},
				'& svg path': {
					fill: theme.palette.primary.main,
				},
			},
		},
		'& div': {
			display: 'inline-flex',
			alignItems: 'center',
			position: 'relative',
			padding: '0 25px 0 20px',
			height: 50,
			marginBottom: 15,
			borderRadius: 30,
			transition: 'all .1s linear',
		},
	},
	sideMenuListItemLabel: {
		fontWeight: 700,
		fontSize: 20,
		marginLeft: 15,
	},
	sideMenuListItemIcon: {
		fontSize: 32,
		marginLeft: -5,
	},
	sideMenuTweetButton: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(3.2),
	},
	tweetsWrapper: {
		borderRadius: 0,
		height: '100%',
		borderTop: 'none',
		borderBottom: 'none',
	},
	tweetsHeader: {
		borderTop: 'none',
		borderRight: 'none',
		borderLeft: 'none',
		padding: '10px 15px',
		'& h6': {
			fontWeight: 800,
		},
	},
	tweet: {
		cursor: 'pointer',
		transition: 'all .1s linear',
		paddingTop: 15,
		paddingLeft: 20,
		'&:hover': {
			backgroundColor: 'rgb(245, 248, 250)',
		},
	},
	TweetAvatar: {
		width: theme.spacing(5),
		height: theme.spacing(5),
	},
	tweetFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 450,
		position: 'relative',
		left: -13,
	},
	tweetUserName: {
		color: grey[500],
	},
}));

const SearchTextField = withStyles(() =>
	createStyles({
		input: {
			borderRadius: 30,
			backgroundColor: '#e6ecf0',
			height: 45,
			padding: 0,
		},
	}),
)(InputBase);

export const Home = () => {
	const classes = useHomeStyles();

	return (
		<Container className={classes.wrapper} maxWidth='lg'>
			<Grid style={{ height: '100%' }} container spacing={2}>
				<Grid item xs={3}>
					<SideMenu classes={classes} />
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.tweetsWrapper} variant='outlined'>
						<Paper className={classes.tweetsHeader} variant='outlined'>
							<Typography variant='h6'>Главная</Typography>
						</Paper>
						{[
							...new Array(20).fill(
								<Tweet
									classes={classes}
									text={
										'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore sunt necessitatibus molestiae excepturi sed nemo maiores doloribus iste beatae? Corrupti, suscipit tempore! Temporibus ea aperiam odio deserunt esse dolorum ipsam quam perferendis, dolorem sint, eaque voluptatem accusamus, molestias a nesciunt libero. Id ea a suscipit quae at adipisci sed!'
									}
									user={{
										fullname: 'hi9mi',
										username: 'pikwasss',
										avatarUrl:
											'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80',
									}}
								/>,
							),
						]}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<SearchTextField placeholder='Поиск по Твиттеру' fullWidth />
				</Grid>
			</Grid>
		</Container>
	);
};
