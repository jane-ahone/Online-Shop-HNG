import React, { useState } from "react";
import exit from "../../../../assets/icons/multiplication-sign-icon.svg";
import checkedIcon from "../../../../assets/icons/btn-checkmark.svg";
import plusIcon from "../../../../assets/icons/plus-sign.svg";
import minusIcon from "../../../../assets/icons/minus-icon.svg";
import deleteIcon from "../../../../assets/icons/delete-icon.svg";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../Context/CartContext";
import { useProducts } from "../../../../Context/ProductsContext";

const Cart = ({ setCartVisibility }) => {
  const { cartProducts, addToCart, removeFromCart, clearCart } = useCart();
  const { allProducts, setAllProducts } = useProducts();

  const handleDeleteClick = () => {
    setCartVisibility((prevState) => !prevState);
  };

  const initialProducts = cartProducts;

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
    removeFromCart(id);
    setProducts(products.filter((product) => product.id !== id));
    setAllProducts(
      allProducts.map((product) =>
        product.id === id ? { ...product, cart: false } : product
      )
    );
  };

  const handleCartEmpty = () => {
    clearCart();
    setProducts([]);
    setAllProducts(
      allProducts.map((product) =>
        cartProducts.some((cartProduct) => cartProduct.id === product.id)
          ? { ...product, cart: false }
          : product
      )
    );
  };

  const subtotal = products.reduce(
    (total, product) =>
      total + product.current_price[0].CAD[0] * product.quantity,
    0
  );

  return cartProducts ? (
    <div className="cart-main">
      <div className="cart-header">
        <p className="cart-title">My Cart</p>
        <img
          src={exit}
          onClick={handleDeleteClick}
          className="exit-icon"
          id="exit-icon-bg"
          alt="Close Cart"
        />
        <Link to="/all products" id="exit-icon-sm">
          <img src={exit} className="exit-icon" alt="Close Cart" />
        </Link>
      </div>
      <div className="cart-products">
        {products.map((product) => (
          <div key={product.id} className="cart-product">
            <img src={checkedIcon} className="checked-icon" alt="Checked" />
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              className="blue-product"
              alt="Product"
            />
            <div className="product-details">
              <p className="product-desc">{product.name}</p>
              <p className="product-price">
                ${product.current_price[0].CAD[0]}
              </p>
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
        <div className="clear-cart">
          <img
            src={deleteIcon}
            alt="Delete Product"
            className="clear-cart-icon"
            onClick={handleCartEmpty}
          />
          <span>Clear Cart</span>
        </div>
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
        <Link
          to="/checkout"
          state={{
            products: products,
            subtotal: subtotal,
          }}
          className="checkout-link"
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
  ) : (
    <p>Cart is Empty</p>
  );
};

export default Cart;
