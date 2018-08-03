import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyDPXt_2_SDx9JGaj-_8SXjKn5EkfzriPGc';



// Create a new component. This new component should
// produce some html

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            videos:[],
            selectedVideo: null
        };
        
        this.videoSearch('Leauge Of Legends');
        
    }
    
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({videos:videos,selectedVideo:videos[0]}) //({videos}) => ES6 syntax same as {videos:videos}
        });
    }
    
    render(){
        
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 400);
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div> 
        );
    }
  
  
  // <== JSX
}

//Take this component's generated HTML and put it
// on the page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'));