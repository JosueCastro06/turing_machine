import React from "react";

const BarControl = ({ currentState, generalMessage, counter }) => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center mt-2 mb-10">
      <h3>
        Current State: <span className="text-30px">{currentState}</span>
      </h3>
      <h3
        className={`text-30px ${
          generalMessage == "Finish, Approved !" || generalMessage == "Finish !"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {generalMessage}
      </h3>
      <h3>
        Step: <span className="text-30px">{counter}</span>
      </h3>
    </div>
  );
};

export default BarControl;
