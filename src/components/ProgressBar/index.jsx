import React from "react";

import "./ProgressBar.sass";

const ProgressBar = ({ squareSize, strokeWidth, percentage }) => {
  const sqSize = squareSize;

  const radius = (sqSize - strokeWidth) / 2;

  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  const dashArray = radius * Math.PI * 2;

  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          stroke: `${
            percentage > 65
              ? `#79c385`
              : percentage > 30
              ? `#bed113`
              : `#d35066`
          }`,
        }}
      />
    </svg>
  );
};

export default ProgressBar;
