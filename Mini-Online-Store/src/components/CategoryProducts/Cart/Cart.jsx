import React from "react";
import exit from "../../../assets/icons/multiplication-sign-icon.svg";
import checkedIcon from "../../../assets/icons/btn-checkmark.svg";
import blueProduct from "../../../assets/images/image 4.svg";
import plusIcon from "../../../assets/icons/plus-sign.svg";
import minusIcon from "../../../assets/icons/minus-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-main">
      <div className="cart-header">
        <p className="cart-title">My Cart</p>
        <img src={exit} className="exit-icon"></img>
      </div>
      <div className="cart-products">
        <div className="cart-product-1">
          <img src={checkedIcon} className="checked-icon"></img>
          <img src={blueProduct} className="blueProduct"></img>
          <div className="product-details">
            <p className="product-desc">Banana Boat Light As Air SPF 50+</p>
            <p className="product-price">$75</p>
            <div className="action-icons">
              <div className="numerical-icons">
                <img src={plusIcon} alt="" className="plus-icon" />
                <span className="quantity">1</span>
                <img src={minusIcon} alt="" className="minus-icon" />
              </div>
              <img src={deleteIcon} alt="" className="delete-icon" />
            </div>
          </div>
        </div>
        <div className="cart-product-2">
          <img src={checkedIcon} className="checked-icon"></img>
          <img src={blueProduct} className="blueProduct"></img>
          <div className="product-details">
            <p className="product-desc">Banana Boat Light As Air SPF 50+</p>
            <p className="product-price">$75</p>
            <div className="action-icons">
              <div className="numerical-icons">
                <img
                  src={plusIcon}
                  alt=""
                  className="plus-icon numerical-icon"
                />
                <span className="quantity">1</span>
                <img
                  src={minusIcon}
                  alt=""
                  className="minus-icon numerical-icon"
                />
              </div>
              <img
                src={deleteIcon}
                alt=""
                className="delete-icon numerical-icon"
              />
            </div>
          </div>
        </div>
        <div className="all-btn">
          <img src={checkedIcon} className="check-icon"></img>
          <p>ALL</p>
        </div>
        <hr />
        <div className="order-summary">
          <div className="subtotal">
            <p>Subtotal </p>
            <p>$150 </p>
          </div>
          <div className="shipping">
            <p>Shipping </p>
            <p>$150 </p>
          </div>
          <div className="total">
            <p>Total </p>
            <p>$160 </p>
          </div>
        </div>
        <Link to="/checkout">
          <button className="checkout-btn">Continue to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
