import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Theme, withStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';

import { useHomeStyles } from 'pages/Home/theme';
import { User } from 'redux/ducks/user/contracts/state';

interface ProfileBlockProps {
	userData: User | undefined;
}

const ProfileButton = withStyles((theme: Theme) => ({
	root: {
		color: theme.palette.primary.main,
		backgroundColor: 'transparent',
		border: `1px solid ${theme.palette.primary.main}`,
		padding: '0 14px 0 14px',
		transition: 'all linear 0.2s',
		'&:hover': {
			backgroundColor: 'rgba(29, 161, 242, 0.1)',
		},
	},
}))(Button);

export const ProfileBLock: React.FC<ProfileBlockProps> = ({ userData }) => {
	const classes = useHomeStyles();

	return (
		<div className={classes.profileInfoWrapper}>
			<div className={classes.profileInfoHeader}>
				<div className={classes.profileAvatarWrapper}>
					<Avatar className={classes.profileLargeAvatar} />
				</div>
				<ProfileButton>Редактировать Профиль</ProfileButton>
			</div>
			<div className={classes.profileInfoBlock}>
				<Typography variant='h6'>{!userData ? <Skeleton variant='text' width={100} /> : userData?.fullname}</Typography>
				<Typography color='textSecondary' variant='body1' display='block'>
					@{!userData ? <Skeleton variant='text' width={60} /> : userData?.username}
				</Typography>
			</div>
			<div className={classes.profileDescription}>
				<Typography color='textSecondary' variant='subtitle1' style={{ fontWeight: 500 }} display='block'>
					{!userData ? (
						<Skeleton variant='text' width={200} />
					) : (
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cupiditate porro facere est'
					)}
				</Typography>
			</div>
			<div className={classes.profileBio}>
				<DateRangeIcon />
				<Typography color='textSecondary' variant='subtitle1' display='block'>
					{!userData ? <Skeleton variant='text' width={100} /> : 'Зарегистрировался в 2018 году'}
				</Typography>
			</div>
			<div className={classes.profileCounters}>
				<div className={classes.profileCountersItem}>
					<Typography variant='subtitle1'>{!userData ? <Skeleton variant='text' width={5} /> : '0'}</Typography>
					<Typography color='textSecondary' variant='subtitle1' display='block'>
						Following
					</Typography>
				</div>
				<div className={classes.profileCountersItem}>
					<Typography variant='subtitle1'>{!userData ? <Skeleton variant='text' width={5} /> : '0'}</Typography>
					<Typography color='textSecondary' variant='subtitle1' display='block'>
						Followers
					</Typography>
				</div>
			</div>
		</div>
	);
};
