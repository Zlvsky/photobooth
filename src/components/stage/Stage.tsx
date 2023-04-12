import React from 'react';
import Webcam from "react-webcam";
import RenderVideo from '../videos/RenderVideo';
import video2 from "../../assets/videos/2.webm"

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};


function Stage() {
    const webcamRef = React.useRef<any>(null);
  

    return (
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Webcam
          audio={false}
          ref={webcamRef}
          height={1920}
          width={1080}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="absolute w-full h-full object-fill"
        />
        <RenderVideo position={{ x: 500, y: 500 }} src={video2} />
      </div>
    );
}

export default Stage;