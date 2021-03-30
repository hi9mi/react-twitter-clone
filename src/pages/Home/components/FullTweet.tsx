import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classNames from 'classnames';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { fetchTweetData, setTweetData } from 'redux/ducks/tweet/actionCreatores';
import { selectIsTweetLoading, selectTweetData } from 'redux/ducks/tweet/selector';
import { useHomeStyles } from '../theme';
import Divider from '@material-ui/core/Divider';

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
	//classes.fullTweetFooter
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
						</div>
					</Typography>
				</div>
				<Typography className={classes.fullTweetText} gutterBottom>
					{tweetData.text}
				</Typography>
				<Typography style={{ margin: '16px 0' }}>
					<span className={classes.tweetUserName}>
						{format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLang })} •
					</span>
					&nbsp;
					<span className={classes.tweetUserName}>
						{format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', { locale: ruLang })}
					</span>
				</Typography>
				<Divider light />
				<div className={classes.fullTweetFooterCounters}>
					<div>
						<b>789.7K</b>
						<span className={classes.tweetUserName}>Ретвитов</span>
					</div>
					<div>
						<b>78.4K</b>
						<span className={classes.tweetUserName}>Ответов</span>
					</div>
					<div>
						<b>1.6М</b>
						<span className={classes.tweetUserName}>Лайков</span>
					</div>
				</div>
				<Divider light />
				<div className={classNames(classes.fullTweetFooter)}>
					<IconButton>
						<CommentIcon style={{ fontSize: 20 }} />
					</IconButton>
					<IconButton>
						<RepostIcon style={{ fontSize: 20 }} />
					</IconButton>
					<IconButton>
						<LikeIcon style={{ fontSize: 20 }} />
					</IconButton>
					<IconButton>
						<ShareIcon style={{ fontSize: 20 }} />
					</IconButton>
				</div>
				<Divider light />
			</Paper>
		);
	}

	return null;
};
