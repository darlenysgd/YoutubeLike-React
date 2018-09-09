import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//Create a new component that should produce some HTML.

const API_KEY = 'AIzaSyAN-BA8iP5ia2DU754dtLrCvIH-a5uvhHI';

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>

	);
}

///Take the component and put in the dom

ReactDOM.render(<App/>, document.querySelector('.container')); 