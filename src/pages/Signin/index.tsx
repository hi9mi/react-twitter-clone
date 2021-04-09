import React from 'react';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';

export const useStylesSignIn = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		height: '100vh',
	},
	blueSide: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#71c9f8',
		flex: '0 0 50%',
		overflow: 'hidden',
	},
	blueSideBigIcon: {
		position: 'absolute',
		left: '50%',
		top: '53%',
		transform: 'translate(-50%, -50%)',
		width: '260%',
		height: '260%',
	},
	blueSideListInfo: {
		position: 'relative',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 380,
		'& h6': {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 600,
			fontSize: 20,
		},
	},
	blueSideListInfoItem: {
		marginBottom: '40px',
	},
	blueSideListInfoIcon: {
		fontSize: 32,
		marginRight: 10,
	},
	loginSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 0 50%',
		overflow: 'hidden',
	},
	loginSideTwitterIcon: {
		fontSize: 45,
	},
	loginSideWrapper: {
		width: 380,
	},
	loginSideTitle: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 60,
		marginTop: 20,
	},
	loginSideField: {
		marginBottom: 18,
	},
	registerField: {
		marginBottom: theme.spacing(5),
	},
	loginFormControl: {
		marginBottom: theme.spacing(2),
	},
}));

export const SignIn: React.FC = (): React.ReactElement => {
	const [visableModal, setVisableModal] = React.useState<'signIn' | 'signUp'>();
	const classes = useStylesSignIn();

	const handleClickOpenSignIn = (): void => {
		setVisableModal('signIn');
	};

	const handleClickOpenSignUp = (): void => {
		setVisableModal('signUp');
	};

	const handleCloseModal = (): void => {
		setVisableModal(undefined);
	};

	return (
		<div className={classes.wrapper}>
			<section className={classes.blueSide}>
				<TwitterIcon color='primary' className={classes.blueSideBigIcon} />
				<ul className={classes.blueSideListInfo}>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<SearchIcon className={classes.blueSideListInfoIcon} />
							Читайте о том, что вам интересно.
						</Typography>
					</li>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<PeopleIcon className={classes.blueSideListInfoIcon} />
							Узнайте, о чем говорят в мире.
						</Typography>
					</li>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<MessageIcon className={classes.blueSideListInfoIcon} />
							Присоединяйтесь к общению.
						</Typography>
					</li>
				</ul>
			</section>
			<section className={classes.loginSide}>
				<div className={classes.loginSideWrapper}>
					<TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
					<Typography className={classes.loginSideTitle} variant='h4'>
						Узнайте, что происходит в мире прямо сейчас
					</Typography>
					<Typography>
						<b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
					</Typography>
					<br />
					<Button
						onClick={handleClickOpenSignUp}
						style={{ marginBottom: 20 }}
						variant='contained'
						color='primary'
						fullWidth>
						Зарегистрироваться
					</Button>
					<Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>
						Войти
					</Button>
					<LoginModal open={visableModal === 'signIn'} onClose={handleCloseModal} />
					<RegisterModal open={visableModal === 'signUp'} onClose={handleCloseModal} />
				</div>
			</section>
		</div>
	);
};
