import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		height: '100vh',
	},
	logo: {
		margin: '10px 0',
		padding: 0,
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
		height: '100vh',
	},
	sideMenuListItem: {
		cursor: 'pointer',
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
		'& a': {
			display: 'inline-flex',
			alignItems: 'center',
			position: 'relative',
			padding: '0 25px 0 20px',
			height: 50,
			lineHeight: 50,
			color: '#14171a',
			marginBottom: 15,
			textDecoration: 'none',
			borderRadius: 30,
			transition: 'all .1s linear',
		},
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
			'& a': {
				backgroundColor: 'rgba(29, 161, 242, 0.1)',
				'& h6': {
					color: theme.palette.primary.main,
				},
				'& svg path': {
					fill: theme.palette.primary.main,
				},
			},
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
	sideMenuListProfile: {
		bottom: '2%',
		position: 'fixed',
		cursor: 'pointer',
		maxWidth: 230,
		width: '100%',
		borderRadius: 30,
		padding: 10,
		transition: 'all .1s linear',
		'&:hover': {
			backgroundColor: 'rgba(29, 161, 242, 0.1)',
		},
	},
	sideProfile: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
	sideProfileInfo: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		marginLeft: 10,
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
		'& a': {
			textDecoration: 'none',
			color: '#000',
		},
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
	imageList: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	imageListItem: {
		position: 'relative',
		marginTop: 5,
		width: 60,
		height: 60,
		borderRadius: 6,
		marginRight: 5,
		transition: 'all 0.1s linear',
		overflow: 'hidden',
		'& img': {
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		'& svg path': {
			fill: '#d9d9d9',
		},
	},
	imageListRemoveButton: {
		top: 0,
		right: 0,
		padding: '3px !important',
		position: 'absolute',
		background: '#2c2c2cb8 !important',
		borderRadius: '3px !important',
		'&:hover svg path': {
			fill: '#fff',
		},
	},
	profileHeader: {
		position: 'sticky',
		top: 0,
		zIndex: 2000,
	},
	profileBackground: {
		backgroundColor: 'rgb(196, 207, 214)',
		height: 200,
		width: '100%',
	},
	profileInfoWrapper: {
		marginBottom: 16,
		paddingTop: 12,
		paddingLeft: 16,
		paddingRight: 16,
	},
	profileInfoHeader: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	profileAvatarWrapper: {
		position: 'relative',
	},
	profileLargeAvatar: {
		position: 'absolute',
		top: '-250%',
		width: theme.spacing(18),
		height: theme.spacing(18),
		border: '3px solid #fff',
	},
	profileInfoBlock: {
		marginTop: 4,
		marginBottom: 12,
		'& h6': {
			fontWeight: 800,
		},
	},
	profileDescription: {
		marginBottom: 12,
	},
	profileBio: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 12,
		'& svg': {
			fontSize: 20,
			marginRight: 4,
			'& path': {
				fontSize: 14,
				fill: 'rgba(0, 0, 0, 0.54)',
			},
		},
	},
	profileCounters: {
		display: 'flex',
		alignItems: 'center',
	},
	profileCountersItem: {
		display: 'flex',
		alignItems: 'center',
		marginRight: 20,
		'& h6': {
			fontWeight: 600,
			marginRight: 4,
		},
	},
	profileRootClass: {
		transition: 'all linear 0.1s',
		'& header': {
			backgroundColor: '#fff',
			borderBottom: '1px solid #e8e8e8',
		},
		'& button': {
			minWidth: '0',
		},
		'& .MuiTab-wrapper': {
			color: 'rgb(91, 112, 131)',
			fontWeight: 700,
			textTransform: 'none',
			transition: 'all linear 0.1s',
		},
		'& .Mui-selected': {
			'& span': {
				color: theme.palette.primary.main,
			},
		},
	},
}));
