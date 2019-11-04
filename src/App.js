import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import Navbar from './components/layout/Navbar';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


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
			<Provider store={store}>
			<CssBaseline/>
				<div>
					<Navbar/>
				</div>
			</Provider>
		</MuiThemeProvider>
	);
}

export default App;
