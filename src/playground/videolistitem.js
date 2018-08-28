import React from 'react';
import {Media} from 'react-bootstrap';
export const VideoListItem = (props)=>{
    const video = props.video
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return(

        <div onClick={props.onUserSelected(video)} className='item-list'>
        <div className='item-list-margin'>
        <Media>
        <Media.Left>
        <img src={imageUrl}/>
        </Media.Left>
        <Media.Body>
        <Media.Heading>{video.snippet.title}</Media.Heading>
        </Media.Body>
        </Media>
        </div>
        </div>

        // <li onClick={()=> props.onUserSelected(video)}>
        // <div className='video-list media'>
        // <div className='media-left'>
        // <img className='media-object' src={imageUrl}/>
        // </div>
        
        
        // </div>
        // <div className="media-body">
        // <div className="media-heading">
        // {video.snippet.title}
        // </div>
        // </div>
        // </li>
    )
}