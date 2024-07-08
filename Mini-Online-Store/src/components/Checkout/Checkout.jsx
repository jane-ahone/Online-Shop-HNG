import React from "react";
import "./Checkout.css";
import Header from "../CategoryProducts/Header";
import arrowRightDouble from "../../assets/icons/arrow-right-double.svg";
import Cart from "../CategoryProducts/Cart/Cart";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="checkout-main">
        <div className="checkout-main-header">
          <p>
            Product
            <img
              src={arrowRightDouble}
              alt="right-arrow-icon"
              className="arrow-right-double"
            />
          </p>
          <p>
            My Cart
            <img
              src={arrowRightDouble}
              alt="right-arrow-icon"
              className="arrow-right-double"
            />
          </p>
          <p>
            Checkout
            <img
              src={arrowRightDouble}
              alt="right-arrow-icon"
              className="arrow-right-double"
            />
          </p>
          <p>
            Order Complete
            <img
              src={arrowRightDouble}
              alt="right-arrow-icon"
              className="arrow-right-double"
            />
          </p>
        </div>
        <div className="checkout-main-contents">
          <Cart />
          <div className="shipping-information"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
