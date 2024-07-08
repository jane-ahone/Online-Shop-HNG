import React, { useState } from "react";
import catIcon from "../../assets/icons/cat-icon.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import Header from "../CategoryProducts/Header";
import heartIcon from "../../assets/icons/heart-icon.svg";
import product2 from "../../assets/images/product-listings/image 6.svg";
import product3 from "../../assets/images/product-listings/image 12.svg";
import product4 from "../../assets/images/product-listings/image 9.svg";
import product5 from "../../assets/images/product-listings/image 10.svg";
import product6 from "../../assets/images/product-listings/image 10.svg";
import product7 from "../../assets/images/product-listings/image 6.svg";
import product8 from "../../assets/images/product-listings/image 12.svg";
import product9 from "../../assets/images/product-listings/image 9.svg";
import "./Home.css";
import { Link } from "react-router-dom";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Cart/Cart";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  return (
    <div className="productlistings-home-main">
      <Header setCartVisibility={setCartVisibility} />
      {cartVisibility ? (
        <>
          <Overlay />
          <Cart />
        </>
      ) : null}

      <div className="productlisting-content">
        <div className="productlistings-header">
          <p className="productlistings-title">All Products</p>
          <Link to="/sunscreen">
            <img src={catIcon} alt="icon" className="cat-icon" />
          </Link>
        </div>
        <div className="product1">
          <div className="product-image">
            <img src={product2} />
            <img src={heartIcon} className="heart-icon" />
            <img src={cartIcon} className="cart-icon" />
          </div>

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
        <div className="product9">
          <img src={product9} />
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
        <div className="product9">
          <img src={product9} />
          <p className="prodDesc">Banana Boat Light As Air SPF 50+</p>
          <p>13,000 sold</p>
          <p className="prodPrice">$75</p>
        </div>
      </div>

      <span className="page-number">1</span>
    </div>
  );
};

export default Home;
