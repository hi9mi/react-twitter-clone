import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import { Tweet as TweetComponent } from 'components/Tweet';
import { useHomeStyles } from 'pages/Home/theme';
import { Tweet } from 'redux/ducks/tweets/contracts/state';

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: any;
	value: any;
}

interface TabsBarProps {
	tweets: Tweet[]
	isLoading: boolean
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}



export const TabsBar: React.FC<TabsBarProps> = ({tweets, isLoading}) => {
	const classes = useHomeStyles();

	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

	return (
		<div className={classes.profileRootClass}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					aria-label='full width tabs'>
					<Tab label='Твиты' {...a11yProps(0)} />
					<Tab label='Твиты и ответы' {...a11yProps(1)} />
					<Tab label='Медиа' {...a11yProps(2)} />
					<Tab label='Нравится' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0} dir={theme.direction}>
				{isLoading ? (
					<div className={classes.tweetsLoaderCenter}>
						<CircularProgress />
					</div>
				) : (
					tweets.map((tweet) => <TweetComponent key={tweet._id} classes={classes} images={tweet.images} {...tweet} />)
				)}
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3} dir={theme.direction}>
					Item Three
				</TabPanel>
			</SwipeableViews>
		</div>
	);
};
