import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Header from "../CategoryProducts/Global/Header/Header";
import arrowRightDouble from "../../assets/icons/arrow-right-double.svg";
import partyPopper from "../../assets/images/sunscreen-page/Party Popper.svg";
import paymentOptions from "../../assets/images/sunscreen-page/payment-options.svg";
import "../CategoryProducts/Global/Cart/Cart.css";
import Cart from "../CategoryProducts/Global/Cart/Cart";
import { Link, useLocation } from "react-router-dom";
import Overlay from "../CategoryProducts/Overlay/Overlay";

const Checkout = () => {
  const location = useLocation();
  console.log(location.state);
  const products = location.state.products;
  const subtotal = location.state.subtotal;
  const fromTabletState = location.state.fromTablet;

  // const selectedCartProductState = location.state.selectedCartProductState;
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [fromTablet, setfromTablet] = useState(true);

  useEffect(() => {
    fromTabletState ? null : setfromTablet(false);
  }, []);

  const handleCartClick = () => {
    setCartVisibility((prevState) => !prevState);
  };

  const handleCheckout = () => {
    setOrderComplete(true);
  };

  return (
    <div className="checkout-page">
      {fromTablet ? null : <Header selectedCartProductState={products} />}

      {cartVisibility ? (
        <>
          <Overlay />
          <Cart
            setCartVisibility={setCartVisibility}
            selectedCartProductState={selectedCartProductState}
          />
        </>
      ) : null}
      {orderComplete && (
        <>
          <Overlay />
          <div className="order-complete-popup">
            <div className="order-complete">
              <img
                src={partyPopper}
                alt="Party Popper"
                className="party-popper-svg"
              />
              <p className="order-complete-text">Order Complete</p>
              <p>
                You will be receiving an email with your order details and
                shipping information soon.
              </p>
              <Link to="/all products">
                <button
                  className="payment-details-checkout"
                  onClick={() => setOrderComplete(false)}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
      <div className="checkout-main">
        <div className="checkout-main-header">
          <Link to="/all products">
            <p>
              Product
              <img
                src={arrowRightDouble}
                alt="right-arrow-icon"
                className="arrow-right-double"
              />
            </p>
          </Link>
          <p>
            My Cart
            <img
              src={arrowRightDouble}
              alt="right-arrow-icon"
              className="arrow-right-double"
            />
          </p>
          <p style={{ color: "#14335A" }}>
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
        <div className="checkout-main-header-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>Checkout</p>
        </div>
        <div className="checkout-main-contents">
          <div className="cart-main">
            <p className="cart-title">My Order</p>
            <div className="cart-products">
              <hr />
              {products.map((product) => (
                <div key={product.id} className="cart-product">
                  <img
                    src={product.image}
                    className="blue-product"
                    alt="Product"
                  />
                  <div className="product-details">
                    <p className="product-desc">{product.description}</p>
                    <p className="product-price">Qty {product.quantity}</p>
                  </div>
                </div>
              ))}
              <hr />
              <div className="order-summary">
                <div className="subtotal">
                  <p>Subtotal </p>
                  <p>${subtotal} </p>
                </div>
                <div className="shipping">
                  <p>Shipping </p>
                  <p>$0 </p>
                </div>
                <div className="total">
                  <p>Total </p>
                  <p>${subtotal + 0} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-main-right">
            <div className="shipping-information">
              <p className="shipping-title">Shipping Information</p>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="full-name">Shipping Address:</label>
                <input type="text" id="full-name" placeholder="Full Name" />
                <input type="text" id="state" placeholder="State" />
                <input type="text" id="address" placeholder="Address" />
              </div>
            </div>
            <div className="payment-details">
              <p className="payment-title">Payment Details</p>
              <div>
                <div className="first-input">
                  <label htmlFor="card-number">Card Information</label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234-1234-1234-1234"
                    className="card-info"
                  />
                </div>
                <div className="card-specifics">
                  <input type="text" id="card-expiry" placeholder="MM/YY" />
                  <input type="text" id="card-cvv" placeholder="CVV" />
                </div>
              </div>
            </div>
            <div className="save-select-cntr">
              <input
                type="checkbox"
                name="save-select"
                id="save-select"
                className="save-select-btn"
              />
              <span>Save selected details</span>
            </div>
            <button
              className="payment-details-checkout"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className="payment-details-checkout-with-trans"
              onClick={handleCheckout}
            >
              Checkout with Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
