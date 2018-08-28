import React from 'react';
// import $ from 'jquery';

const API_KEY = 'AIzaSyB008zqkIvBy0l7x93rHllu56V6a_9mh8w';

class VideoDetail extends React.Component{
  

    render(){
    const video = this.props.video;


    
          
    if(!video){
        return <div>Loading</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    
    this.props.search(this.props.video.id.videoId)
    


    return (
        <div>
        <div>
        <iframe src={url}></iframe>
        </div>
        <div>
        <div>{video.snippet.title} {this.props.views} {this.props.likes} {this.props.dislikes}</div>
        <div>{video.snippet.description}</div>
        </div>
        </div>
    )
}
}

export default VideoDetail