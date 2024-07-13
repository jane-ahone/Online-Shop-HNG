import React, { useEffect, useState } from "react";
import Header from "../CategoryProducts/Global/Header/Header";
import { useLocation, Link } from "react-router-dom";
import CircularIndeterminate from "../CategoryProducts/Global/CircularProgress/CircularIndeterminate";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";
import { useCart } from "../../Context/CartContext";
import heartIcon from "../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../assets/icons/heart-filled-icon.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../assets/icons/icon-shopping-bag-filled.svg";

import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartVisibility, setCartVisibility] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  const location = useLocation();
  const productId = location.state;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=0a36d850c31a45d39133b32a2fd057a7&Appid=SR2T6ZLOZN05508&Apikey=a8215cad7cfc4b2e93d320a64b03587d20240712233833515464`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const enhancedProduct = {
          ...result,
          quantity: 1,
          like: false,
          cart: false,
        };
        setProduct(enhancedProduct);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const toggleLike = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      like: !prevProduct.like,
    }));
  };

  const toggleCart = () => {
    setProduct((prevProduct) => {
      const updatedProduct = { ...prevProduct, cart: !prevProduct.cart };
      if (updatedProduct.cart) {
        addToCart(updatedProduct);
      } else {
        removeFromCart(productId);
      }
      return updatedProduct;
    });
  };

  return !loading ? (
    <div className="product-details-page">
      <Header setCartVisibility={setCartVisibility} />
      {cartVisibility && (
        <>
          <Overlay />
          <Cart setCartVisibility={setCartVisibility} />
        </>
      )}
      {product && (
        <div className="product-details">
          <div className="product-image">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt={product.name}
              className="timbu-image"
            />
            <img
              src={product.like ? heartFilledIcon : heartIcon}
              className="heart-icon"
              onClick={toggleLike}
              alt="Like button"
            />
            <img
              src={product.cart ? cartFilledIcon : cartIcon}
              className="cart-icon"
              onClick={toggleCart}
              alt="Cart button"
            />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="category">{product.categories[0].name}</p>
            <p className="desc">{product.description}</p>
            <p className="prodPrice">$40</p>
          </div>
          <Link
            to="/"
            style={{ marginBottom: "0.5rem" }}
            className="back-products"
          >
            Back to Products
          </Link>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  ) : (
    <CircularIndeterminate />
  );
};

export default ProductDetails;
