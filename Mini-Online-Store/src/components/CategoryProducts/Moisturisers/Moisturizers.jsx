import React, { useEffect, useState } from "react";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
// import "./Moisturizers.css";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import { useProducts } from "../../../Context/ProductsContext";

import toggleFilter from "../../../assets/icons/filter-mail-square.svg";
import CircularIndeterminate from "../Global/CircularProgress/CircularIndeterminate";

const Moisturizers = () => {
  const { cartProducts, addToCart, removeFromCart } = useCart();
  const { allProducts } = useProducts();

  const location = useLocation();
  const selectedCategory = location.state;

  const [productsState, setProductsState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set productsState when allProducts changes

    if (allProducts.length > 0) {
      setProductsState(
        allProducts.filter(
          (product) => product.categories[0].name === "moisturizers"
        )
      );
      setLoading(false);
    }
  }, [allProducts]);

  const toggleLike = (id) => {
    const newProducts = productsState.map((product) =>
      product.id === id ? { ...product, like: !product.like } : product
    );
    setProductsState(newProducts);
  };

  const toggleCart = (id) => {
    const alreadyInCart = cartProducts.some((product) => product.id === id);

    const newProducts = productsState.map((product) => {
      if (product.id === id) {
        // If the product is already in the cart, we don't add it again
        const updatedProduct = { ...product, cart: !product.cart };
        if (alreadyInCart) {
          return { ...product, cart: true };
        } else {
          if (updatedProduct.cart) {
            addToCart(updatedProduct);
          } else {
            removeFromCart(id);
          }

          return updatedProduct;
        }
      }
      return product;
    });
    setProductsState(newProducts);
  };

  return !loading ? (
    <div className="product-display-main">
      <div className="product-main-content">
        <div className="product-header">
          <p className="product-title">
            {selectedCategory ? selectedCategory : "Moisturizers"}
          </p>
          <Link to="/all products">
            <div className="toggle-filter">
              <span className="">Filter by Category</span>
              <img src={toggleFilter} alt="" className="" />
            </div>
          </Link>
        </div>
        <div className="products">
          {productsState.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <Link to="/product" state={product.id}>
                  <img
                    src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                    alt="Product"
                  />
                </Link>
                <img
                  src={product.like ? heartFilledIcon : heartIcon}
                  className="heart-icon"
                  onClick={() => toggleLike(product.id)}
                  alt="Like button"
                />
                <img
                  src={product.cart ? cartFilledIcon : cartIcon}
                  className="cart-icon"
                  onClick={() => toggleCart(product.id)}
                  alt="Cart button"
                />
              </div>
              <p className="prodDesc">{product.name}</p>
              <p className="prodSold">10000 sold</p>
              <p className="prodPrice">${product.current_price[0].CAD[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <CircularIndeterminate />
  );
};

export default Moisturizers;
