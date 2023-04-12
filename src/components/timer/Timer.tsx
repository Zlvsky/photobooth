import React, { useState, useEffect } from "react";

import saveAs from "../../helpers/saveAs";

function Timer({ onCapture }: any) {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(interval);
      onCapture();
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="absolute z-40 left-1/2 top-60 -translate-x-1/2" id="as">
      <span className="text-5xl text-white" onClick={onCapture}>
        {timeLeft !== 0 && (timeLeft)}
        1
      </span>
    </div>
  );
}

export default Timer;
