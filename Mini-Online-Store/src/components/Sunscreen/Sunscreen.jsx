import React from "react";
import Sidebar from "../Home/Sidebar";
import Header from "../Home/Header";
import product1 from "../../assets/images/sunscreen-page/Frame 12-1.svg";
import exit from "../../assets/icons/multiplication-sign-icon.svg";
import "./Sunscreen.css";

const Sunscreen = () => {
  return (
    <div>
      <div className="sunscreen-main-content">
        <p>Sunscreen</p>
        <p className="filter">
          <p>
            Sensitive Skin
            <img src={exit} alt="exit-icon" className="exit-icon" />
          </p>
          <p>
            Dry Skin
            <img src={exit} alt="exit-icon" className="exit-icon" />
          </p>
        </p>
        <div className="products">
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
          <div className="product7">
            <img src={product1} />
            <p>Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p>$75</p>
          </div>
          <div className="product8">
            <img src={product1} />
            <p>Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p>$75</p>
          </div>
          <div className="product9">
            <img src={product1} />
            <p>Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p>$75</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunscreen;
