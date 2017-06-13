import React from 'react';
import {VideoList,SearchBar} from './components';
import YTSearch from 'youtube-api-search';

const key = 'AIzaSyCnhyXw9wIT8Y3D2LNhG9tAzuDVN8sKFuY';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {videos:[]};
      YTSearch({key,term:'surfboards'}, videos => {
          this.setState({videos});
          console.log(videos);
      });
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
