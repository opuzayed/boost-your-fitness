import React from "react";
import "./Break.css";
const Break = ({ handleBreakTime }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4 style={{ color: "white" }}>Add a Break</h4>
      <div className="break-time">
        <button className="time-style" onClick={() => handleBreakTime(10)}>
          <span>10s</span>
        </button>
        <button className="time-style" onClick={() => handleBreakTime(20)}>
          <span>20s</span>
        </button>
        <button className="time-style" onClick={() => handleBreakTime(30)}>
          <span>30s</span>
        </button>
        <button className="time-style" onClick={() => handleBreakTime(40)}>
          <span>40s</span>
        </button>
      </div>
    </div>
  );
};

export default Break;
