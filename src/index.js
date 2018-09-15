import _ from '../node_modules/lodash';
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

		this.state = {
		 	videos : [],
		 	selectedVideo: null
		};

		this.videoSearch('wines');
	}

	videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0] 
			});
		});
	}

	render(){

		const videoSearch = _.debounce((term) =>  {this.videoSearch(term)}, 300 );
		return (
		<div>
			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelected={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos}/>
		</div>

	);
	}
	
}

///Take the component and put in the dom

ReactDOM.render(<App/>, document.querySelector('.container')); 