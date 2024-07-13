import React, { useState, useEffect } from "react";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";
import "./Sunscreen.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import { useProducts } from "../../../Context/ProductsContext";
import CircularIndeterminate from "../Global/CircularProgress/CircularIndeterminate";

const Sunscreen = ({ selectedCategory }) => {
  const { addToCart, removeFromCart, cartProducts } = useCart();
  const { allProducts, setAllProducts } = useProducts();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=0a36d850c31a45d39133b32a2fd057a7&reverse_sort=false&Appid=SR2T6ZLOZN05508&Apikey=a8215cad7cfc4b2e93d320a64b03587d20240712233833515464"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        return result;
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData()
      .then((result) => {
        const initialProduct = result.items;
        const enhancedProducts = initialProduct.map((product) => ({
          ...product,
          quantity: 1,
          like: false,
          cart: false,
        }));
        setAllProducts(enhancedProducts);
      })
      .catch((error) => {
        console.error("Error during fetching and setting products:", error);
      })
      .finally(() => {});
  }, []);

  const [productsState, setProductsState] = useState(null);

  useEffect(() => {
    if (allProducts.length > 0) {
      setProductsState(
        allProducts.filter(
          (product) => product.categories[0].name === "sunscreens"
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
    console.log("Cart Products", cartProducts);
    console.log(id);
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
      <div className="sunscreen-main-content">
        <div className="sunscreen-header">
          <p className="sunscreen-title">
            {selectedCategory ? selectedCategory : "Sunscreens"}
          </p>
          <Link to="/all products">
            <div className="toggle-filter">
              <span className="filter-cat-text">Filter by Category</span>
              <img src={toggleFilter} alt="" className="toggle-filter-img" />
            </div>
          </Link>
        </div>
        <div className="products">
          {productsState.map((product, index) => (
            <div className="product" key={index}>
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

export default Sunscreen;
