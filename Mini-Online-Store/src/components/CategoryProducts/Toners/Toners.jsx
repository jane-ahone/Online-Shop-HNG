import React, { useState, useEffect } from "react";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
// import "./Toners.css";
import { useLocation } from "react-router-dom";
import CircularIndeterminate from "../Global/CircularProgress/CircularIndeterminate";
import { Link } from "react-router-dom";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";
import { useCart } from "../../../Context/CartContext";
import { useProducts } from "../../../Context/ProductsContext";

const Toners = () => {
  const location = useLocation();
  const selectedCategory = location.state;

  const { cartProducts, addToCart, removeFromCart, clearCart } = useCart();
  const { allProducts } = useProducts();

  const [productsState, setProductsState] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set productsState when allProducts changes

    if (allProducts.length > 0) {
      setProductsState(
        allProducts.filter((product) => product.categories[0].name === "toners")
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
        const updatedProduct = { ...product, cart: !product.cart };
        if (alreadyInCart) {
          removeFromCart(id);
          return { ...product, cart: false };
        } else {
          addToCart(updatedProduct);
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
            {selectedCategory ? selectedCategory : "Toners"}
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
              <p className="prodSold">7800 sold</p>
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

export default Toners;
