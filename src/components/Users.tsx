import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useHomeStyles } from 'pages/Home/theme';
import { selectUsersItems } from 'redux/ducks/users/selector';

export const Users = () => {
	const classes = useHomeStyles();
	const items = useSelector(selectUsersItems);

	return (
		<Paper className={classes.rightSideBlock}>
			<Paper className={classes.rightSideBlockHeader} variant='outlined'>
				<b>Последние пользователи</b>
			</Paper>
			<List>
				{items.map((obj) => (
					<>
						<ListItem className={classes.rightSideBlockItem}>
							<ListItemAvatar>
								<Avatar
									alt={`К нам присоединился UserName`}
									src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
								/>
							</ListItemAvatar>
							<ListItemText
								primary='Dock Of Shame'
								secondary={
									<Typography component='span' variant='body2'>
										@FavDockOfShame
									</Typography>
								}
							/>
							<Button color='primary'>
								<PersonAddIcon />
							</Button>
						</ListItem>
						<Divider component='li' />
					</>
				))}
			</List>
		</Paper>
	);
};
