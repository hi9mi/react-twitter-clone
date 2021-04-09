import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classNames from 'classnames';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import mediumZoom from 'medium-zoom';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { fetchTweetData, setTweetData } from 'redux/ducks/tweet/actionCreatores';
import { selectIsTweetLoading, selectTweetData } from 'redux/ducks/tweet/selector';
import { useHomeStyles } from '../theme';
import { ImagesList } from 'components/ImagesList';
import { Link } from 'react-router-dom';

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

	React.useEffect(() => {
		if (!isLoading) {
			mediumZoom('.tweet-image__zoom img', {
				background: 'rgba(0, 0, 0, 0.9)',
			});
		}
	}, [isLoading]);

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
					<Avatar className={classes.TweetAvatar} />
					<Typography>
						<Link to={`/user/${tweetData.user._id}`}>
							<b>{tweetData.user.fullname}</b>
						</Link>
						&nbsp;
						<div>
							<span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
						</div>
					</Typography>
				</div>
				<Typography className={classes.fullTweetText} gutterBottom>
					{tweetData.text}
					<div className='tweet-image__zoom'>
						{tweetData.images && <ImagesList classes={classes} images={tweetData.images} />}
					</div>
					<template id='template'>
						<div className='wrapper'>
							<svg className='close' data-zoom-close viewBox='0 0 24 24'>
								<path
									d='M8.817 7.403a1 1 0 0 0-1.414 1.414L10.586 12l-3.183 3.183a1 1 0 0 0 1.414 1.415L12 13.415l3.183 3.183a1 1 0 0 0 1.415-1.415L13.415 12l3.183-3.183a1 1 0 0 0-1.415-1.414L12 10.586 8.817 7.403z'
									fill-rule='evenodd'></path>
							</svg>
							<section className='main' data-zoom-container></section>
							<aside className='sidebar'></aside>
						</div>
					</template>
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
