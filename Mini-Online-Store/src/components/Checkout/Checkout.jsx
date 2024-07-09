import React from "react";
import "./Checkout.css";
import Header from "../CategoryProducts/Global/Header/Header";
import arrowRightDouble from "../../assets/icons/arrow-right-double.svg";
import blueProduct from "../../assets/images/image 4.svg";
import "../CategoryProducts/Global/Cart/Cart.css";
import Cart from "../CategoryProducts/Global/Cart/Cart";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  console.log(location.state);
  const products = location.state.products;
  const subtotal = location.state.subtotal;
  return (
    <div className="checkout-page">
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
        <div className="checkout-main-contents">
          <div className="cart-main">
            <p className="cart-title">My Order</p>

            <div className="cart-products">
              <hr></hr>
              {products.map((product) => (
                <div key={product.id} className="cart-product">
                  <img
                    src={product.img}
                    className="blue-product"
                    alt="Product"
                  />
                  <div className="product-details">
                    <p className="product-desc">{product.desc}</p>
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
                <label htmlFor="name">Email</label>
                <input type="text" id="name" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="address"> Shipping Address:</label>
                <input type="text" id="full-name" placeholder="Full Name" />
                <input type="text" id="state" placeholder="State" />
                <input type="text" id="address" placeholder="Address" />
              </div>
            </div>
            <div className="payment-details">
              <p className="payment-title">Payment Details </p>
              <div>
                <label htmlFor="name">Card Information</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234-1234-1234-1234"
                />
                <input type="text" id="card-number" placeholder="MM/YY" />
                <input type="text" id="card-number" placeholder="CVV" />
              </div>
            </div>
            <div className="save-select-cntr">
              <input
                type="checkbox"
                name="save-select"
                id=""
                className="save-select-btn"
              />{" "}
              <span>Save selected details</span>
            </div>
            <button className="payment-details-checkout">Checkout</button>
            <button className="payment-details-checkout-with-trans">
              Checkout with Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
