import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from 'pages/Home';
import { SignIn } from 'pages/Signin';
import { AuthApi } from 'services/api/authApi';
import { setUserData } from 'redux/ducks/user/actionCreatores';
import { selectIsAuth } from 'redux/ducks/user/selector';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	const isAuth = useSelector(selectIsAuth);

	const checkAuth = React.useCallback(async () => {
		try {
			const { data } = await AuthApi.getMe();
			dispatch(setUserData(data));
		} catch (error) {
			console.log(error);
		}
	}, [dispatch]);

	React.useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	React.useEffect(() => {
		if (isAuth ? history.location.pathname === '/signin' || '/' : null) {
			history.push('/home');
		} else {
			history.push('/signin')
		}
	}, [isAuth]);

	return (
		<div className='App'>
			<Switch>
				<Route path='/signin' component={SignIn} />
				<Route path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
