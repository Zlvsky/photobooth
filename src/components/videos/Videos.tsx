import React from 'react';
import video1 from "../../assets/videos/Kosmonauta1.webm"
import video2 from "../../assets/videos/Kosmonauta2.webm"
import video3 from "../../assets/videos/cos1.webm"
import RenderVideo from './RenderVideo';


function Videos() {
    return (
      <div className="absolute w-full h-full z-20">
        <RenderVideo position={{ x: 0, y: 10 }} src={video1} />
        <RenderVideo position={{x: 0, y: 40}} src={video2}/>
        <RenderVideo position={{x: 20, y: 40}} src={video1}/>
        <RenderVideo position={{x: 20, y: 10}} src={video2}/>
      </div>
    );
}

export default Videos;