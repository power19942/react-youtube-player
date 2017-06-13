import React from 'react';
import {VideoListItem} from './index';
const VideoList = (props) =>{
    const videoItem = props.videos.map(video=> {
        return <VideoListItem key={video.etag} video={video}/>
    });
  return(
      <ul className="col-md-4 list-group">
          {videoItem}
      </ul>
  )
};

export {VideoList};