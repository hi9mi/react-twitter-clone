import 'index.css';

import App from 'App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { store } from 'redux/store';
import theme from 'theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
