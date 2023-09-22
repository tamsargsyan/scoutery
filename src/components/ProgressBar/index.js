import React, { useEffect, useState } from "react";
import "./style.css";

const ProgressBar = ({ percent }) => {
  const [width, setWidth] = useState(0);

  const getColor = () => {
    const redColor = [255, 0, 0];
    const orangeColor = [206, 201, 75];
    const greenColor = [131, 211, 67];

    const t = percent / 100;

    const interpolateColor = (color1, color2, weight) => {
      const result = color1.map((channel, index) => {
        const blendedChannel = channel + (color2[index] - channel) * weight;
        return Math.round(blendedChannel);
      });
      return `rgb(${result.join(",")})`;
    };

    if (t <= 0.5) {
      // Transition from red to orange
      return interpolateColor(redColor, orangeColor, t * 2);
    } else {
      // Transition from orange to green
      return interpolateColor(orangeColor, greenColor, (t - 0.5) * 2);
    }
  };

  useEffect(() => {
    // Animate the progress bar width over time
    const animationDuration = 1000; // 1 second
    const step = 10; // Update every 10ms

    const updateWidth = () => {
      let currentWidth = 0;
      const increment = (percent / (animationDuration / step)) * step;

      const interval = setInterval(() => {
        currentWidth += increment;
        if (currentWidth >= percent) {
          currentWidth = percent;
          clearInterval(interval);
        }
        setWidth(currentWidth);
      }, step);
    };

    updateWidth();
  }, [percent]);

  return (
    <div className='progress-bar'>
      <div
        className='progress'
        style={{
          width: `${width}%`,
          background: getColor(),
        }}></div>
      <span className='percent-val'>{percent}%</span>
    </div>
  );
};

export default ProgressBar;
