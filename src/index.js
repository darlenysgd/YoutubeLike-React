import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from '../node_modules/youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'; 
//Create a new component that should produce some HTML.

const API_KEY = 'AIzaSyAN-BA8iP5ia2DU754dtLrCvIH-a5uvhHI';

class App extends Component {

	constructor(props){
		super(props);

		this.state = { videos : [] };

		YTSearch({key: API_KEY, term: 'wines'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
		return (
		<div>
			<SearchBar/>
			<VideoDetail video={this.state.videos[1]}/>
			<VideoList videos={this.state.videos}/>
		</div>

	);
	}
	
}

///Take the component and put in the dom

ReactDOM.render(<App/>, document.querySelector('.container')); 