import React from 'react';
import _ from 'lodash';
import {VideoList,SearchBar,VideoDetail} from './components';
import YTSearch from 'youtube-api-search';

const key = 'AIzaSyCnhyXw9wIT8Y3D2LNhG9tAzuDVN8sKFuY';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {videos:[],selectedVideo:null};
    this.videoSearch('programming')
  }

  videoSearch(term){
      YTSearch({key,term}, videos => {
          this.setState({videos,selectedVideo:videos[0]});
      });
  }
  render() {
      const videoSearch = _.debounce(term=>{this.videoSearch(term)},3000);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    );
  }
}
