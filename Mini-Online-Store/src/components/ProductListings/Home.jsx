import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../CategoryProducts/Global/CircularProgress/CircularIndeterminate";
import Header from "../CategoryProducts/Global/Header/Header";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";
import { useCart } from "../../Context/CartContext";

import toggleFilter from "../../assets/icons/filter-mail-square.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../assets/icons/heart-filled-icon.svg";
const appId = import.meta.env.VITE_APPID;
const apiKey = import.meta.env.VITE_APIKEY;
const organization_id = import.meta.env.VITE_ORGANISATIONID;

// console.log("App ID:", appId);
// console.log("API Key:", apiKey);
// console.log("OrganisationId:", organization_id);

import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

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
        const initialProduct = result.items;

        const enhancedProducts = initialProduct.map((product) => ({
          ...product,
          quantity: 1,
          like: false,
          cart: false,
        }));

        setProducts(enhancedProducts);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [cartVisibility, setCartVisibility] = useState(false);

  const { cartProducts, addToCart, removeFromCart, clearCart } = useCart();

  const toggleLike = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, like: !product.like } : product
      )
    );
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return !loading ? (
    <div className="productlistings-home-main">
      <Header setCartVisibility={setCartVisibility} />

      <div className="productlisting-content">
        {cartVisibility && (
          <>
            <Overlay />
            <Cart setCartVisibility={setCartVisibility} />
          </>
        )}

        <div className="productlistings-header">
          <p className="productlistings-title">All Products</p>
          <Link to="/sunscreens">
            <div className="toggle-filter" id="toggle-filter-lg">
              <span>Filter by Category</span>
              <img src={toggleFilter} alt="Filter" />
            </div>
          </Link>
        </div>

        {currentProducts.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <Link to="/product" state={product.id}>
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                  className="link-images"
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
            <p className="prodSold">{9500} sold</p>
            <p className="prodPrice">${product.current_price[0].CAD[0]}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  ) : (
    <CircularIndeterminate />
  );
};

export default Home;
