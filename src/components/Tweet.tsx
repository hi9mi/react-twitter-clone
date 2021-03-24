import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import classNames from 'classnames';
import { useHomeStyles } from 'pages/Home/theme';
import React from 'react';
import { Link } from 'react-router-dom';

interface TweetProps {
	_id: string;
	text: string;
	classes: ReturnType<typeof useHomeStyles>;
	user: {
		fullname: string;
		username: string;
		avatarUrl: string;
	};
}

export const Tweet: React.FC<TweetProps> = ({ _id, text, classes, user }: TweetProps): React.ReactElement => {
	return (
		<Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
			<Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
				<Avatar className={classes.TweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
				<div>
					<Typography>
						<b>{user.fullname}</b>&nbsp;
						<span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
						<span className={classes.tweetUserName}>·</span>&nbsp;
						<span className={classes.tweetUserName}>1 ч</span>
					</Typography>
					<Typography variant='body1' gutterBottom>
						{text}
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
		</Link>
	);
};
