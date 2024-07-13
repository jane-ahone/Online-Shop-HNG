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
import "./Home.css";

//Arrange file structure later with api keys and vercel.json

function useSelectedCartProducts() {
  const [selectedCartProducts, set] = useState([]);
  const get = () => {
    return selectedCartProducts;
  };

  return { get, set };
}

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "/api/products?organization_id=0a36d850c31a45d39133b32a2fd057a7&reverse_sort=false&Appid=SR2T6ZLOZN05508&Apikey=a8215cad7cfc4b2e93d320a64b03587d20240712233833515464"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        const initialProduct = result.items;
        console.log(initialProduct);

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
  const selectedCartProductState = useSelectedCartProducts();
  const { cartProducts, addToCart, removeFromCart, clearCart } = useCart();

  const toggleLike = (id) => {
    setProducts(
      products.map((product) => {
        return product.id === id
          ? { ...product, like: !product.like }
          : product;
      })
    );
  };

  const toggleCart = (id) => {
    const newProducts = products.map((product) => {
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
    setProducts(newProducts);
  };
  const handleCurrSelectedProduct = (id) => {};

  return !loading ? (
    <div className="productlistings-home-main">
      <Header
        setCartVisibility={setCartVisibility}
        // selectedCartProductState={selectedCartProductState}
      />

      <div className="productlisting-content">
        {cartVisibility && (
          <>
            <Overlay />
            <Cart
              setCartVisibility={setCartVisibility}
              // selectedCartProductState={selectedCartProductState}
            />
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

        {products.map((product, index) => (
          <div key={product.id} className="product">
            <Link to="/product" state={product.id}>
              <div className="product-image">
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                  className="link-images"
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
            </Link>
            {/* {console.log(product.photos[0].url)} */}
            <p className="prodDesc">{product.name}</p>
            <p className="prodSold">{10000} sold</p>
            <p className="prodPrice">${product.current_price[0].CAD[0]}</p>
            {/* <p className="prodPrice">$100</p> */}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <CircularIndeterminate />
  );
};

export default Home;
