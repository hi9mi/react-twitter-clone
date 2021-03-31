import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Home } from 'pages/Home';
import { SignIn } from 'pages/Signin';
import { AuthApi } from 'services/api/authApi';
import { setUserData } from 'redux/ducks/user/actionCreatores';

function App() {
	const dispatch = useDispatch();
	const history = useHistory()

	const checkAuth = React.useCallback(async () => {
		try {
			const { data } = await AuthApi.getMe();
			dispatch(setUserData(data));
			history.replace('/home')
		} catch (error) {
			console.log(error);
		}
	}, [dispatch, history]);

	React.useEffect(() => {
		checkAuth();
	}, [checkAuth]);

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
