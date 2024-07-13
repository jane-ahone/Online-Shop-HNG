import React, { useEffect, useState } from "react";
import Header from "../CategoryProducts/Global/Header/Header";
import { useLocation, Link } from "react-router-dom";
import CircularIndeterminate from "../CategoryProducts/Global/CircularProgress/CircularIndeterminate";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";
import { useCart } from "../../Context/CartContext";
import { useProducts } from "../../Context/ProductsContext";
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

  const { addToCart, removeFromCart, cartProducts } = useCart();
  const { allProducts } = useProducts();

  const location = useLocation();
  const productId = location.state;

  useEffect(() => {
    setLoading(true);
    const foundProduct = allProducts.find((prod) => prod.id === productId);
    if (foundProduct) {
      setProduct({ ...foundProduct, like: false, cart: false });
      setLoading(false);
    } else {
      setError(new Error("Product not found"));
      setLoading(false);
    }
  }, [productId, allProducts]);

  const toggleLike = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      like: !prevProduct.like,
    }));
  };

  const toggleCart = () => {
    const updatedProduct = { ...product, cart: !product.cart };
    if (updatedProduct.cart) {
      addToCart(updatedProduct);
    } else {
      removeFromCart(updatedProduct.id);
    }
    setProduct(updatedProduct);
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
