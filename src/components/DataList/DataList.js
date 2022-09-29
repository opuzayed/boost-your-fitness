import React from "react";
import "./DataList.css";

const DataList = () => {
  const datas = [
    {
      title: "Push-Up",
      img: "./src/images/1.jpg",
      time: "30",
    },
    {
      title: "Pull-Up",
      img: "./src/images/2.jpg",
      time: "15",
    },
    {
      title: "Squats",
      img: "./src/images/3.jpg",
      time: "30",
    },
    {
      title: "Sit-Ups",
      img: "./src/images/4.jpg",
      time: "15",
    },
  ];

  const list = datas.map((data) => <li>{data.img}</li>);
  return <ul>{list}</ul>;
};

export default DataList;
