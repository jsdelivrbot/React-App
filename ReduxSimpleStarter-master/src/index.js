/**
 * Created by chaminn on 12/30/2017.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch  from 'youtube-api-search';
import SearchBar from './components/search_bar'; //fileName = search_bar : give file references: actual relative path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA_QiWareUZzMMqGnYkUzxiwI8rQhJbZ2E';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
                    videos : [],
                    selectedVideo: null
                   };
      this.videoSearch('surfboards');
  }

  //define serarch callback
  //this passed to SearchBar under the property onSearchTermChange
  videoSearch(term){
    YTSearch({key: API_KEY , term: term }, (videos) =>{
        //this.setState({videos: videos}); //key and value same ==> condense
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  render(){
    //throttle user input
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 1000)
    return( <div>
  <SearchBar
      onSearchTermChange={term => this.videoSearch(term)}
  />
  <VideoDetail video={this.state.selectedVideo} />
  <VideoList
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos={this.state.videos}/>
    </div>
  );
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
