import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useHomeStyles } from 'pages/Home/theme';
import { formatDate } from 'utils/formatDate';
import { ImagesList } from './ImagesList';
import { removeTweet } from 'redux/ducks/tweets/actionCreatores';
import { User } from 'redux/ducks/user/contracts/state';

interface TweetProps {
	_id: string;
	text: string;
	classes: ReturnType<typeof useHomeStyles>;
	createdAt: string;
	images?: string[];
	user: User
}

export const Tweet: React.FC<TweetProps> = ({
	_id,
	text,
	classes,
	user,
	images,
	createdAt,
}: TweetProps): React.ReactElement => {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const history = useHistory();

	const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
		event.preventDefault();
		history.push(`/home/tweet/${_id}`);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
		event.stopPropagation();
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	const removePreventDefault = (event: React.MouseEvent<HTMLElement>): void => {
		event.stopPropagation();
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleRemove = (): void => {
		if (window.confirm('Вы действительно хотите удалить твит?')) {
			handleClose();
			dispatch(removeTweet(_id));
		} else {
			handleClose();
		}
	};

	return (
		<a href={`/home/tweet/${_id}`} className={classes.tweetWrapper} onClick={handleClickTweet}>
			<Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
				<Avatar className={classes.TweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} />
				<div style={{ width: '100%' }}>
					<div className={classes.tweetHeader}>
						<div>
							<b>{user.fullname}</b>&nbsp;
							<span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
							<span className={classes.tweetUserName}>·</span>&nbsp;
							<span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
						</div>
						<div onClick={removePreventDefault}>
							<IconButton
								style={{ padding: 0 }}
								aria-label='more'
								aria-controls='long-menu'
								aria-haspopup='true'
								onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu id='long-menu' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
								<MenuItem onClick={handleClose}>Редактировать</MenuItem>
								<MenuItem onClick={handleRemove}>Удалить твит</MenuItem>
							</Menu>
						</div>
					</div>
					<Typography style={{ overflowWrap: 'anywhere' }} variant='body1' gutterBottom>
						{text}
						{images && <ImagesList classes={classes} images={images} />}
					</Typography>
					<div className={classes.tweetFooter}>
						<div>
							<IconButton>
								<CommentIcon style={{ fontSize: 20 }} />
							</IconButton>
							<span>1</span>
						</div>
						<div>
							<IconButton>
								<RepostIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<LikeIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<ShareIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
					</div>
				</div>
			</Paper>
		</a>
	);
};
