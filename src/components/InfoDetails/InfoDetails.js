import React, { useState } from "react";
import img from "../../Assets/Images/opu.jpg";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import "./InfoDetails.css";
let breaks = 0;

const InfoDetails = (props) => {
  const [breakTime, setBreakTime] = useState(0);
  const { time } = props;

  const handleBreakTime = (time) => {
    breaks = time;
    setBreakTime(breaks);
  };

  return (
    <div
      style={{
        marginLeft: "10px",
        marginTop: "20px",
        marginRight: "10px",
        position: "sticky",
        top: "0",
      }}
    >
      <div className="img-style">
        <img src={img} alt="" />
        <h4 style={{ color: "white" }}>Zayed Hossain</h4>
      </div>
      <p style={{ textAlign: "justify", color: "white" }}>
        I help skinny people to build muscle without lifting weights. I help
        people like you to lose weight without breaking a sweat. We help
        athletes to up their game through proper nutrition.
      </p>
      <Break handleBreakTime={handleBreakTime}></Break>
      <ExerciseDetails time={time} breakTime={breakTime}></ExerciseDetails>
    </div>
  );
};

export default InfoDetails;
