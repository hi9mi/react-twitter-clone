import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

import { ModalBlock } from 'components/ModalBlock';

export const RegisterModal = () => {
	return (
    <h1>Hi</h1>
		// <ModalBlock
		// 	visable={visableModal === 'signUp'}
		// 	onClose={handleCloseModal}
		// 	classes={classes}
		// 	title='Создайте учетную запись'>
		// 	<FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
		// 		<FormGroup aria-label='position' row>
		// 			<TextField
		// 				autoFocus
		// 				id='name'
		// 				label='Имя'
		// 				InputLabelProps={{ shrink: true }}
		// 				variant='filled'
		// 				type='name'
		// 				className={classes.registerField}
		// 				fullWidth
		// 			/>
		// 			<TextField
		// 				autoFocus
		// 				id='email'
		// 				label='E-Mail'
		// 				InputLabelProps={{ shrink: true }}
		// 				variant='filled'
		// 				type='email'
		// 				className={classes.registerField}
		// 				fullWidth
		// 			/>
		// 			<TextField
		// 				id='password'
		// 				label='Пароль'
		// 				InputLabelProps={{ shrink: true }}
		// 				variant='filled'
		// 				type='password'
		// 				className={classes.registerField}
		// 				fullWidth
		// 			/>
		// 			<Button variant='contained' color='primary' fullWidth>
		// 				Далее
		// 			</Button>
		// 		</FormGroup>
		// 	</FormControl>
		// </ModalBlock>
	);
};
