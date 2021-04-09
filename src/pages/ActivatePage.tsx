import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserData, setUserLoadingStatus } from 'redux/ducks/user/actionCreatores';
import { LoadingStatus } from 'redux/types';
import { AuthApi } from 'services/api/authApi';

export const ActivatePage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(setUserLoadingStatus(LoadingStatus.NEVER));
		const hash = window.location.pathname.split('/').pop();

		if (hash) {
			AuthApi.activate(hash)
				.then(({ data }) => {
					if (data.token) {
						window.localStorage.setItem('token', data.token);
						dispatch(setUserData(data));
						history.push('/home');
					}
				})
				.catch(() => {
					dispatch(setUserLoadingStatus(LoadingStatus.LOADED));
				});
		}
	}, [dispatch, history]);

	return null;
};
