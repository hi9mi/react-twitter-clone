import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/ListAlt';
import MessageIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import UserIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';


import { useHomeStyles } from 'pages/Home/theme';
import { AddTweetForm } from './AddTweetForm';
import { ModalBlock } from './ModalBlock';

interface SideMenuProps {
	classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
	const [visableAddTweet, setVisableAddTweet] = React.useState<boolean>(false);

	const handleClickOpenAdddTweet = () => {
		setVisableAddTweet(true);
	};

	const onCloseAddTweet = () => {
		setVisableAddTweet(false);
	};

	return (
		<ul className={classes.sideMenuList}>
			<li className={classes.sideMenuListItem}>
				<Link to='/home'>
					<IconButton className={classes.logo} aria-label='' color='primary'>
						<TwitterIcon className={classes.logoIcon} />
					</IconButton>
				</Link>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<SearchIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Поиск
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<NotificationsIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Уведомления
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<MessageIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Сообщения
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<BookmarkIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Закладки
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<ListIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Список
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<UserIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sideMenuListItemLabel} variant='h6'>
							Профиль
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<Button
					onClick={handleClickOpenAdddTweet}
					className={classes.sideMenuTweetButton}
					variant='contained'
					color='primary'
					fullWidth>
					<Hidden smDown>Твиттнуть</Hidden>
					<Hidden mdUp>
						<CreateIcon />
					</Hidden>
				</Button>
				<ModalBlock onClose={onCloseAddTweet} visable={visableAddTweet}>
					<div style={{ width: 550 }}>
						<AddTweetForm rowsMax={15} classes={classes} />
					</div>
				</ModalBlock>
			</li>
		</ul>
	);
};
