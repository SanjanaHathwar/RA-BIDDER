import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import Navbar from './components/layout/Navbar';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router  ,Route ,Switch} from 'react-router-dom'
import Signin from './components/auth/Signin';
import PrivateRoute from './routes/PrivateRoute';

const theme = createMuiTheme({

	palette: {
		primary: {
			
			main: '#1089FF',
			
			contrastText: "#fff"
		},
		secondary:{
			main: '#E95055',
			contrastText: "#fff"
		},

		default:'#ECECEC',
		
	}
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<Provider store={store}>
				<CssBaseline/>
					<Switch>
						
						<Route exact path="/" render ={props => <Signin { ...props} />} />
						<PrivateRoute exact path="/home" component={Navbar} />
						
					</Switch>
				</Provider>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
