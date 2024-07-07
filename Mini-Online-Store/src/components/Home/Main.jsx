import React from "react";
import Header from "./Header";
import mainImage from "../../assets/images/main-image.png";
import "./Main.css";
import Arrival from "../Content/Arrival";
const Main = () => {
  return (
    <div className="mainPage">
      <img className="mainImage" src={mainImage}></img>
      <Arrival />
    </div>
  );
};

export default Main;
