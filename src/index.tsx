import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'App';
import { store } from 'redux/store';
import theme from 'theme';
import 'index.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</ThemeProvider>,
	document.getElementById('root'),
);
