import React from "react";
import img from "../../Assets/Images/exercise.png";
import "./LeftSideTop.css";
const LeftSideTop = () => {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="header-title">
        <div>
          <img src={img} alt="" />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <h4>Boost Your Fitness</h4>
        </div>
      </div>
      <div style={{ marginTop: "30px", color:'white'}}>
        <h5>Select today’s exercise</h5>
      </div>
    </div>
  );
};

export default LeftSideTop;
