import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from 'pages/Home';
import { SignIn } from 'pages/Signin';
import { selectIsAuth, selectUserStatus } from 'redux/ducks/user/selector';
import { Layout } from 'pages/Layout';
import { LoadingStatus } from 'redux/types';
import { useHomeStyles } from 'pages/Home/theme';
import { UserPage } from 'pages/User/index';
import { ActivatePage } from 'pages/ActivatePage';
import { setUserLoadingStatus } from 'redux/ducks/user/actionCreatores';

function App() {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const isAuth = useSelector(selectIsAuth);
	const loadingStatus = useSelector(selectUserStatus);
	const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

	React.useEffect(() => {
		if (window.location.pathname.includes('/signin') && loadingStatus === LoadingStatus.NEVER) {
			dispatch(setUserLoadingStatus(LoadingStatus.LOADED));
		}
	}, [dispatch, loadingStatus]);

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
	}
	if (!isAuth && !window.location.pathname.includes('/user/activate/')) {
		history.push('/signin');
	}

	return (
		<div className='App'>
			<Switch>
				<Route path='/signin' component={SignIn} />
				<Layout>
					<Route path='/home' component={Home} />
					<Route path='/user/:id' component={UserPage} />
					<Route path='/user/activate/:hash' component={ActivatePage} />
				</Layout>
			</Switch>
		</div>
	);
}

export default App;
