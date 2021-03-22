import { Button, IconButton, Typography } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import MessageIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import UserIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import { useHomeStyles } from '../pages/Home';

interface SideMenuProps {
	classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
	return (
		<ul className={classes.sideMenuList}>
			<li className={classes.sideMenuListItem}>
				<IconButton className={classes.logo} aria-label='' color='primary'>
					<TwitterIcon className={classes.logoIcon} />
				</IconButton>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<SearchIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Поиск
					</Typography>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<NotificationsIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Уведомления
					</Typography>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<MessageIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Сообщения
					</Typography>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<BookmarkIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Закладки
					</Typography>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<ListIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Список
					</Typography>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<UserIcon className={classes.sideMenuListItemIcon} />
					<Typography className={classes.sideMenuListItemLabel} variant='h6'>
						Профиль
					</Typography>
				</div>
			</li>
      <li className={classes.sideMenuListItem}>
      <Button className={classes.sideMenuTweetButton} variant='contained' color='primary'  fullWidth>Твиттнуть</Button>
      </li>
		</ul>
	);
};
