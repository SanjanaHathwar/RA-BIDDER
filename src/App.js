import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
// import Auctions from './components/home/Auctions';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<Provider store={store}>
			<div>
				<Navbar/>
			</div>
		</Provider>
	);
}

export default App;
