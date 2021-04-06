import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from 'pages/Home';
import { SignIn } from 'pages/Signin';
import { fetchUserData } from 'redux/ducks/user/actionCreatores';
import { selectIsAuth, selectUserStatus } from 'redux/ducks/user/selector';
import { Layout } from 'pages/Layout';
import { LoadingStatus } from 'redux/types';
import { useHomeStyles } from 'pages/Home/theme';
import { User } from 'pages/User';

function App() {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const isAuth = useSelector(selectIsAuth);
	const loadingStatus = useSelector(selectUserStatus);
	const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

	React.useEffect(() => {
		dispatch(fetchUserData());
	}, [dispatch]);

	// React.useEffect(() => {
	// 	if (isReady && isAuth ? history.location.pathname === '/signin' || '/' : null) {
	// 		history.push('/home');
	// 	} else {
	// 		history.push('/signin');
	// 	}
	// }, [isAuth, isReady, history]);

	if (!isReady) {
		return (
			<div className={classes.LoaderCenter}>
				<CircularProgress />
			</div>
		);
	}

	if (isReady && isAuth && history.location.pathname === '/signin') {
		history.push('/home');
	} else if (isReady && isAuth && history.location.pathname === '/') {
		history.push('/home');
	} else if (!isReady && !isAuth) {
		history.push('/signin');
	}

	return (
		<div className='App'>
			<Switch>
				<Route path='/signin' component={SignIn} />
				<Layout>
					<Route path='/home' component={Home} />
					<Route path='/user' component={User} />
				</Layout>
			</Switch>
		</div>
	);
}

export default App;
