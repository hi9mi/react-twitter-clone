import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { Color } from '@material-ui/lab/Alert';

import { ModalBlock } from 'components/ModalBlock';
import { useStylesSignIn } from '..';
import { Notification } from 'components/Notification';

import { fetchSignIn } from 'redux/ducks/user/actionCreatores';
import { selectUserStatus } from 'redux/ducks/user/selector';
import { LoadingStatus } from 'redux/types';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export interface LoginFormProps {
	email: string;
	password: string;
}

const LoginFormSchema = yup.object().shape({
	email: yup.string().email('Неверный электронный адрес').required('Это поле обязательное'),
	password: yup.string().min(6, 'Неверный пароль').required('Это поле обязательное'),
});

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }: LoginModalProps): React.ReactElement => {
	const classes = useStylesSignIn();
	const dispatch = useDispatch();
	const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
	const loadingStatus = useSelector(selectUserStatus);

	const { control, handleSubmit, errors: fieldsErrors } = useForm<LoginFormProps>({
		resolver: yupResolver(LoginFormSchema),
	});
	const onSubmit = async (data: LoginFormProps) => {
		dispatch(fetchSignIn(data));
	};

	React.useEffect(() => {
		if (loadingStatus === LoadingStatus.SUCCESS) {
			openNotificationRef.current('Авторизация прошла успешна', 'success');
			onClose()
		} else if (loadingStatus === LoadingStatus.ERROR) {
			openNotificationRef.current('Неверный логин или пароль', 'error');
		}
	}, [loadingStatus, onClose]);

	return (
		<Notification>
			{(callback) => {
				openNotificationRef.current = callback;
				return (
					<ModalBlock visable={open} onClose={onClose} classes={classes} title='Войти в аккаунт'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
								<FormGroup aria-label='position' row>
									<Controller
										name='email'
										as={
											<TextField
												autoFocus
												id='email'
												label='E-Mail'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='email'
												className={classes.loginSideField}
												error={!!fieldsErrors.email}
												helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: true,
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: 'invalid email address',
											},
										}}
									/>
									<Controller
										name='password'
										as={
											<TextField
												id='password'
												label='Пароль'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='password'
												className={classes.loginSideField}
												error={!!fieldsErrors.password}
												helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: 'Required',
										}}
									/>
									<Button type='submit' variant='contained' color='primary' fullWidth>
										Войти
									</Button>
								</FormGroup>
							</FormControl>
						</form>
					</ModalBlock>
				);
			}}
		</Notification>
	);
};
