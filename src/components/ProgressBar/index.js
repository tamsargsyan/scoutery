import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ percent }) => {
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

  return (
    <Progress
      percent={percent}
      showInfo={false}
      strokeColor={getColor()}
      trailColor='transparent'
    />
  );
};

export default ProgressBar;
