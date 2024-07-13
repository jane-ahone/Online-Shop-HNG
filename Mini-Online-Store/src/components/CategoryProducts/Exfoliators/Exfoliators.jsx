import React, { useState, useEffect } from "react";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import { useProducts } from "../../../Context/ProductsContext";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";
import CircularIndeterminate from "../Global/CircularProgress/CircularIndeterminate";

const Exfoliators = () => {
  const { cartProducts, addToCart, removeFromCart, clearCart } = useCart();
  const {
    allProducts,
    setAllProducts,
    addProduct,
    updateProduct,
    removeProduct,
    clearProducts,
  } = useProducts();

  const [productsState, setProductsState] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(allProducts);

  useEffect(() => {
    // Set productsState when allProducts changes

    if (allProducts.length > 0) {
      setProductsState(
        allProducts.filter(
          (product) => product.categories[0].name === "exfoliators"
        )
      );
      setLoading(false);
    }
  }, [allProducts]);

  const location = useLocation();
  const selectedCategory = location.state;

  const toggleLike = (id) => {
    const newProducts = productsState.map((product) =>
      product.id === id ? { ...product, like: !product.like } : product
    );
    setProductsState(newProducts);
  };

  const toggleCart = (id) => {
    const newProducts = productsState.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, cart: !product.cart };
        if (updatedProduct.cart) {
          addToCart(updatedProduct);
        } else {
          removeFromCart(id);
        }
        return updatedProduct;
      }
      return product;
    });
    setProductsState(newProducts);
  };

  return !loading ? (
    <div className="product-display-main">
      <div className="sunscreen-main-content">
        <div className="sunscreen-header">
          <p className="sunscreen-title">
            {selectedCategory ? selectedCategory : "Exfoliators"}
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
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt="Product"
                />
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
              <p>{product.sold} sold</p>
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

export default Exfoliators;
