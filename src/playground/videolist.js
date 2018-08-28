import React from 'react';
import { VideoListItem } from './videolistitem';


const VideoList = (props)=>{
    const videoItems = props.videos.map((video)=>{
        return (
            <VideoListItem onUserSelected={props.onVideoSelect} key = {video.etag} video={video}/>
        )
    })

    return(
        <div>
        {videoItems}
        </div>
    )

}

export default VideoList;