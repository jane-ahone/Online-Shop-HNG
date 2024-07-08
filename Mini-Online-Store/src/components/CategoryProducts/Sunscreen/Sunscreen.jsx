import React from "react";
import product1 from "../../../assets/images/product-listings/Frame 12.png";
import product2 from "../../../assets/images/product-listings/Frame 12.png";
import product3 from "../../../assets/images/product-listings/Frame 12.png";
import product4 from "../../../assets/images/product-listings/Frame 12.png";
import product5 from "../../../assets/images/product-listings/Frame 12.png";
import product6 from "../../../assets/images/product-listings/Frame 12.png";
import product7 from "../../../assets/images/product-listings/Frame 12.png";
import product8 from "../../../assets/images/product-listings/Frame 12.png";
import product9 from "../../../assets/images/product-listings/Frame 12.png";
import exit from "../../../assets/icons/multiplication-sign-icon.svg";
import "./Sunscreen.css";

const Sunscreen = () => {
  return (
    <div>
      <div className="sunscreen-main-content">
        <p className="sunscreen-title">Sunscreens</p>

        <div className="products">
          <div className="product1">
            <img src={product1} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product2">
            <img src={product2} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product3">
            <img src={product3} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product4">
            <img src={product4} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product5">
            <img src={product5} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product6">
            <img src={product6} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product7">
            <img src={product7} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product8">
            <img src={product8} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
          <div className="product9">
            <img src={product9} />
            <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
            <p>13,000 sold</p>
            <p className="prodPrice">$75</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunscreen;
