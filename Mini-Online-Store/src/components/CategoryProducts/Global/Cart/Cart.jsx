import React, { useState } from "react";
import exit from "../../../../assets/icons/multiplication-sign-icon.svg";
import checkedIcon from "../../../../assets/icons/btn-checkmark.svg";
import blueProduct from "../../../../assets/images/image 4.svg";
import plusIcon from "../../../../assets/icons/plus-sign.svg";
import minusIcon from "../../../../assets/icons/minus-icon.svg";
import deleteIcon from "../../../../assets/icons/delete-icon.svg";
import "./Cart.css";
import { Link, useLocation } from "react-router-dom";

const Cart = ({ setCartVisibility, selectedCartProductState }) => {
  const handleDeleteClick = () => {
    setCartVisibility((prevState) => !prevState);
  };

  const location = useLocation();
  const selectedCartProductStateSmall = location.state;
  console.log(selectedCartProductStateSmall);

  const initialProducts = selectedCartProductState
    ? selectedCartProductState.get()
    : selectedCartProductStateSmall;
  console.log(initialProducts);

  const [products, setProducts] = useState(initialProducts);

  const handleIncrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-main">
      <div className="cart-header">
        <p className="cart-title">My Cart</p>
        {/* <Link to="/all products"> */}
        <img
          src={exit}
          onClick={handleDeleteClick}
          className="exit-icon"
          id="exit-icon-bg"
          alt="Close Cart"
        />
        {/* </Link> */}
        <Link to="/all products" id="exit-icon-sm">
          <img src={exit} className="exit-icon" alt="Close Cart" />
        </Link>
      </div>
      <div className="cart-products">
        {products.map((product) => (
          <div key={product.id} className="cart-product">
            <img src={checkedIcon} className="checked-icon" alt="Checked" />
            <img src={product.image} className="blue-product" alt="Product" />
            <div className="product-details">
              <p className="product-desc">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <div className="action-icons">
                <div className="numerical-icons">
                  <img
                    src={plusIcon}
                    alt="Increase Quantity"
                    className="plus-icon"
                    onClick={() => handleIncrement(product.id)}
                  />
                  <span className="quantity">{product.quantity}</span>
                  <img
                    src={minusIcon}
                    alt="Decrease Quantity"
                    className="minus-icon"
                    onClick={() => handleDecrement(product.id)}
                  />
                </div>
              </div>
            </div>
            <img
              src={deleteIcon}
              alt="Delete Product"
              className="delete-icon"
              onClick={() => handleDelete(product.id)}
            />
          </div>
        ))}
        {/* <div className="all-btn">
          <img src={checkedIcon} className="check-icon" alt="Check All" />
          <p>ALL</p>
        </div> */}
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
        {console.log(products)}
        <Link
          to="/checkout"
          state={{
            products: products,
            subtotal: subtotal,
            // selectedCartProductState: products,
          }}
          className="checkout-link "
          id="checkout-link-bg"
        >
          <button className="checkout-btn">Continue To Checkout</button>
        </Link>
        <Link
          to="/checkout"
          state={{
            products: products,
            subtotal: subtotal,
            fromTablet: true,
          }}
          className="checkout-link"
          id="checkout-link-sm"
        >
          <button className="checkout-btn">Continue To Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
