import React, { useRef, useEffect } from "react";

import videojs from "video.js";

const width = 700
const height = 500;

function RenderVideo({ position, src }: any) {
  const videoRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const renderVideoFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // requestAnimationFrame(renderVideoFrame);
    };

    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      // setTimeout(renderVideoFrame, 2500);
      
    });

    video.addEventListener("play", () => {
      // renderVideoFrame();
    })

    video.src = src;
    video.crossOrigin = "anonymous";
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        width="700"
        height="500"
        autoPlay
        loop
        muted
        // data-html2canvas-ignore
        // src={src}
        className="z-0 opacity-100 -rotate-90"
        style={{
          visibility: "visible",
          left: `${position.x}%`,
          top: `${position.y}%`,
          position: "absolute",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          display: "none",
          position: "absolute",
          left: `${position.x}%`,
          top: `${position.y}%`,
          width: width,
          height: height,
        }}
      />
    </>
  );
}

export default RenderVideo;
