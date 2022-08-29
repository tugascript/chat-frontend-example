import React from "react";
import { CountdownRenderProps } from "react-countdown";

// Random component

// Renderer callback with condition
const CountdownRenderer: React.FC<CountdownRenderProps> = ({
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return <React.Fragment>Expired</React.Fragment>;
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        {hours}:{minutes}:{seconds}
      </React.Fragment>
    );
  }
};

export default CountdownRenderer;
