import React, { useRef } from "react";
import Container from './components/layout/Container'
import Stage from './components/stage/Stage';
import Videos from './components/videos/Videos';
import Timer from './components/timer/Timer';
import html2canvas from "html2canvas";
import { toPng, toCanvas } from "html-to-image";
import saveAs from "./helpers/saveAs";
import RenderVideo from "./components/videos/RenderVideo";
import video2 from "./assets/videos/2.webm"
function App() {
  const appRef = useRef<any>(null)

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [
  //     {
  //       src: video1,
  //       type: "video/webm",
  //     },
  //   ],
  // };

  const onCapture = () => {
      toCanvas(appRef.current, { cacheBust: true })
        .then(function (dataUrl) {
          console.log(dataUrl);

          // saveAs(dataUrl, "my-node.png");
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
  };

  const exportAsImage = async () => {
    const canvas = await html2canvas(appRef.current, { useCORS: true});
    console.log(canvas);
    const image = canvas.toDataURL("image/png", 1.0);
    saveAs(image, "as");
    // download the image
  };

  

  return (
    <div id="app" ref={appRef} className="w-screen h-screen relative">
      <Stage />
      
      <Videos />
      <Timer onCapture={exportAsImage} />
    </div>
  );
}

export default App
