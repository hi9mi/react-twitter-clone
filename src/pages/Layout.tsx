import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import { SearchTextField } from 'components/SearchTextField';
import { SideMenu } from 'components/SideMenu';
import { Tags } from 'components/Tags';
import { useHomeStyles } from './Home/theme';
import { Users } from 'components/Users';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
	const classes = useHomeStyles();

	return (
		<Container className={classes.wrapper} maxWidth='lg'>
			<Grid container spacing={3} style={{ height: '100%', paddingBottom: 0 }}>
				<Grid style={{ paddingBottom: 0 }} sm={1} md={3} item>
					<SideMenu classes={classes} />
				</Grid>
				<Grid style={{ paddingBottom: 0 }} sm={8} md={6} item>
					{children}
				</Grid>
				<Grid style={{ paddingBottom: 0 }} sm={3} md={3} item>
					<div className={classes.rightSide}>
						<SearchTextField
							variant='outlined'
							placeholder='Поиск по Твиттеру'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
							fullWidth
						/>
						<Tags classes={classes} />
						<Users />
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};
