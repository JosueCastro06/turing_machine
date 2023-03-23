import React from "react";

const BarControl = ({currentState, generalMessage, counter}) => {
  return (
    <>
      <h3>Current State: {currentState}</h3>
      <h3>{generalMessage}</h3>
      <h3>Step: {counter}</h3>
    </>
  );
};

export default BarControl;