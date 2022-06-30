import * as React from "react";

const icon = `M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2Z`;

const pinStyle = {
  fill: "#FFD801",
  stroke: "black",
  strokeWidth: "1",
};

function Pin(props) {
  const { size = 20 } = props;

  return (
    <svg height={size} viewBox='0 0 24 24' style={pinStyle}>
      <path d={icon} />
    </svg>
  );
}

export default React.memo(Pin);