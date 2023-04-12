import React from 'react';
import video1 from "../../assets/videos/1.webm"
import video2 from "../../assets/videos/2.webm"
import RenderVideo from './RenderVideo';


function Videos() {
    return (
        <div className='absolute w-full h-full z-20'>
            <RenderVideo position={{x: 100, y: 200}} src={video2}/>
            <RenderVideo position={{x: 10, y: 1220}} src={video1}/>
        </div>
    );
}

export default Videos;