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
import { selectUserStatus } from 'redux/ducks/user/selector';
import { fetchSignIn } from 'redux/ducks/user/actionCreatores';
import { LoadingStatus } from 'redux/types';

interface RegisterModalProps {
	open: boolean;
	onClose: () => void;
}

export interface RegisterFormProps {
	fullname: string;
	username: string;
	email: string;
	password: string;
	password2: string;
}

const RegisterFormSchema = yup.object().shape({
	fullname: yup.string().required('Это поле обязательное'),
	email: yup.string().required('Это поле обязательное').email('Неверный электронный адрес'),
	username: yup
		.string()
		.required('Это поле обязательное')
		.min(2, 'Неверное имя пользователя')
		.max(16, 'Неверное имя пользователя'),
	password: yup.string().required('Это поле обязательное').min(6, 'Неверный пароль'),
	password2: yup
		.string()
		.required('Это поле обязательное')
		.oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});

export const RegisterModal: React.FC<RegisterModalProps> = ({
	open,
	onClose,
}: RegisterModalProps): React.ReactElement => {
	const classes = useStylesSignIn();
	const dispatch = useDispatch();
	const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
	const loadingStatus = useSelector(selectUserStatus);

	const { control, handleSubmit, errors: fieldsErrors } = useForm<RegisterFormProps>({
		resolver: yupResolver(RegisterFormSchema),
	});
	const onSubmit = async (data: RegisterFormProps) => {
		dispatch(fetchSignIn(data));
	};

	React.useEffect(() => {
		if (loadingStatus === LoadingStatus.SUCCESS) {
			openNotificationRef.current('Регистрация прошла успешна', 'success');
			onClose();
		} else if (loadingStatus === LoadingStatus.ERROR) {
			openNotificationRef.current('Ошибка во время регистрации. Попытайтесь снова', 'error');
		}
	}, [loadingStatus, onClose]);

	return (
		<Notification>
			{(callback) => {
				openNotificationRef.current = callback;
				return (
					<ModalBlock visable={open} onClose={onClose} classes={classes} title='Создайте учетную запись'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
								<FormGroup aria-label='position' row>
									<Controller
										name='fullname'
										as={
											<TextField
												autoFocus
												id='fullname'
												label='Полное имя'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='text'
												className={classes.registerField}
												error={!!fieldsErrors.fullname}
												helperText={fieldsErrors.fullname ? fieldsErrors.fullname.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: true,
										}}
									/>
									<Controller
										name='username'
										as={
											<TextField
												id='username'
												label='Имя пользователя'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='text'
												className={classes.registerField}
												error={!!fieldsErrors.username}
												helperText={fieldsErrors.username ? fieldsErrors.username.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: true,
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: 'Неверное имя пользователя',
											},
										}}
									/>
									<Controller
										name='email'
										as={
											<TextField
												id='email'
												label='E-Mail'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='text'
												className={classes.registerField}
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
												message: 'Неверный E-mail',
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
												className={classes.registerField}
												error={!!fieldsErrors.password}
												helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: true,
										}}
									/>
									<Controller
										name='password2'
										as={
											<TextField
												id='password2'
												label='Подтвердите пароль'
												InputLabelProps={{ shrink: true }}
												variant='filled'
												type='password'
												className={classes.registerField}
												error={!!fieldsErrors.password2}
												helperText={fieldsErrors.password2 ? fieldsErrors.password2.message : null}
												fullWidth
											/>
										}
										control={control}
										defaultValue=''
										rules={{
											required: true,
										}}
									/>
									<Button
										disabled={loadingStatus === LoadingStatus.LOADING}
										type='submit'
										variant='contained'
										color='primary'
										fullWidth>
										Зарегистрироваться
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
