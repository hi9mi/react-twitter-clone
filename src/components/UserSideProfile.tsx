import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import { colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { useHomeStyles } from 'pages/Home/theme';
import { selectUserData } from 'redux/ducks/user/selector';
import { signOut } from 'redux/ducks/user/actionCreatores';

interface UserSideProfileProps {
	classes: ReturnType<typeof useHomeStyles>;
}

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		borderRadius: 10,
		top: '793px !important  ',
		'& a': {
			textDecoration: 'none',
			color: 'black',
		},
		'& ul': {
			paddingTop: 10,
			paddingBottom: 10,
		},
	},
})((props: MenuProps) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'left',
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		textDecoration: 'none',
		'&': {
			width: 200,
			'&:hover': {
				backgroundColor: 'rgba(29, 161, 242, 0.1)',
			},
      '&:focus': {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export const UserSideProfile: React.FC<UserSideProfileProps> = ({ classes }: UserSideProfileProps) => {
	const dispatch = useDispatch();
	const userData = useSelector(selectUserData);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClosePopup = (): void => {
		setAnchorEl(null);
	};

	const handleSignOut = (): void => {
		handleClosePopup();
		window.localStorage.removeItem('token');
		dispatch(signOut());
	};

	if (!userData) {
		return null;
	}

	return (
		<>
			<div onClick={handleOpenPopup} className={classes.sideProfile}>
				<Avatar />

				<div className={classes.sideProfileInfo}>
					<b>{userData.fullname}</b>
					<Typography style={{ color: colors.grey[500] }}>@{userData.username}</Typography>
				</div>
				<KeyboardArrowDownIcon
					style={
						anchorEl ? { transform: 'rotate(180deg)', transition: 'all .1s linear' } : { transition: 'all .13s linear' }
					}
				/>
			</div>
			<StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClosePopup}>
				<Link to={`/user/${userData._id}`}>
					<StyledMenuItem onClick={handleClosePopup}>Мой профиль</StyledMenuItem>
				</Link>
				<StyledMenuItem onClick={handleSignOut}>Выйти из аккаунта</StyledMenuItem>
			</StyledMenu>
		</>
	);
};
