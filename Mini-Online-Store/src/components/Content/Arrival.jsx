import React from "react";
import "./Arrival.css";
import product1 from "../../assets/images/arrival-pg-images/Frame 12-1.svg";

const Arrival = () => {
  const imgLinks = [];
  return (
    <div className="arrivalMain">
      <p>New Arrival</p>
      <div className="arrivalMainContents">
        <div className="product1">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
        <div className="product2">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
        <div className="product3">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
        <div className="product4">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
        <div className="product5">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
        <div className="product6">
          <img src={product1} />
          <p>Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p>$75</p>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
