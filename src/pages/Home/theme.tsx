import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles';

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
		position: 'sticky',
		top: 0,
		listStyle: 'none',
		padding: 0,
		margin: 0,
		maxWidth: 230,
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
	tweetsLoaderCenter: {
		marginTop: 50,
		textAlign: 'center',
	},
	LoaderCenter: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tweetsHeader: {
		display: 'flex',
		alignItems: 'center',
		flex: 1,
		borderTop: 'none',
		borderRight: 'none',
		borderLeft: 'none',
		padding: '10px 15px',
		'& h6': {
			fontWeight: 800,
		},
	},
	tweetsHeaderUser: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	tweetsHeaderBackButton: {
		marginRight: 30,
	},
	tweet: {
		display: 'flex',
		alignItems: 'flex-start',
		cursor: 'pointer',
		transition: 'all .1s linear',
		paddingTop: 15,
		paddingLeft: 20,
		'&:hover': {
			backgroundColor: 'rgb(245, 248, 250)',
		},
	},
	tweetWrapper: {
		color: 'inherit',
		textDecoration: 'none',
	},
	TweetAvatar: {
		width: theme.spacing(6.5),
		height: theme.spacing(6.5),
		marginRight: 15,
	},
	tweetHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		cursor: 'pointer',
	},
	tweetFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		maxWidth: 450,
		position: 'relative',
		left: -13,
	},
	tweetUserName: {
		color: grey[500],
	},
	fullTweet: {
		padding: 22,
	},
	fullTweetText: {
		fontSize: 24,
		marginTop: 20,
		lineHeight: 1.3125,
		wordBreak: 'break-word',
	},
	fullTweetFooterCounters: {
		display: 'flex',
		alignItems: 'center',
		height: 48,
		'& div': {
			cursor: 'pointer',
			marginRight: 20,
			transition: 'all 0.13s linear',
			'& b': {
				marginRight: 5,
			},
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	fullTweetFooter: {
		display: 'flex',
		justifyContent: 'space-around',
		position: 'relative',
		height: 48,
	},
	rightSide: {
		paddingTop: 20,
		position: 'sticky',
		top: 0,
	},
	rightSideBlock: {
		backgroundColor: '#f5f8fa',
		borderRadius: 15,
		marginTop: 20,
		'& .MuiList-root': {
			paddingTop: 0,
		},
	},
	rightSideBlockHeader: {
		borderTop: 0,
		borderLeft: 0,
		borderRight: 0,
		backgroundColor: 'transparent',
		padding: '13px 18px',
		'& b': {
			fontSize: 20,
			fontWeight: 800,
		},
	},
	rightSideBlockItem: {
		cursor: 'pointer',
		'& .MuiTypography-body1': {
			fontWeight: 700,
		},
		'& .MuiListItemAvatar-root': {
			minWidth: 50,
		},
		'& .MuiListItemText-root': {
			minWidth: 0,
		},
		'&:hover': {
			backgroundColor: '#edf3f6',
		},
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
		},
	},
	addForm: {
		padding: 20,
	},
	addFormBody: {
		display: 'flex',
		width: '100%',
	},
	addFormBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	addFormBottomActions: {
		marginTop: 10,
		paddingLeft: 70,
	},
	addFormTextarea: {
		width: '100%',
		border: 0,
		fontSize: 20,
		outline: 'none',
		fontFamily: 'inherit',
		resize: 'none',
	},
	addFormBottomLine: {
		height: 12,
		backgroundColor: '#e6ecf0',
	},
	addFormCircleProgress: {
		position: 'relative',
		width: 20,
		height: 20,
		margin: '0 10px',
		'& .MuiCircularProgress-root': {
			position: 'absolute',
		},
	},
	addFormBottomRight: {
		display: 'flex',
		alignItems: 'center',
	},
}));
