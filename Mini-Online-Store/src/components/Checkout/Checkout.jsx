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
          <div className="shipping-information">
            <p className="shipping-title">Shipping Information</p>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" required />
              </div>
              <div>
                <label htmlFor="state">State:</label>
                <input type="text" id="state" />
              </div>
              <div>
                <label htmlFor="zip">ZIP Code:</label>
                <input type="text" id="zip" />
              </div>
              <div>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
