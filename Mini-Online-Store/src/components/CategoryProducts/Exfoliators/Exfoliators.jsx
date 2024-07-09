import React, { useState } from "react";
import product1 from "../../../assets/images/Exfoliators/1.png";
import product2 from "../../../assets/images/Exfoliators/2.png";
import product3 from "../../../assets/images/Exfoliators/3.png";
import product4 from "../../../assets/images/Exfoliators/4.png";
import product5 from "../../../assets/images/Exfoliators/5.png";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
// import "./Exfoliators.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";

const Exfoliators = ({ selectedCartProductState }) => {
  const location = useLocation();
  const selectedCategory = location.state;
  const products = [
    {
      id: 2,
      img: product2,
      desc: "Origins Ginzing Refreshing Scrub",
      sold: "1,001",
      price: 15,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      img: product3,
      desc: "Zo Skin Health Exfoliating Polish",
      sold: "3,023",
      price: 63,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 4,
      img: product4,
      desc: "Fresh Sugar Face Polish",
      sold: "13,000",
      price: 10,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 5,
      img: product5,
      desc: "SkinMedica Exfoliating Cleanse",
      sold: "2967",
      price: 91,
      like: false,
      cart: false,
    },
  ];

  const [productsState, setProductsState] = useState(products);

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
          selectedCartProductState.set((prevCartProducts) => [
            ...prevCartProducts,
            updatedProduct,
          ]);
        } else {
          selectedCartProductState.set((prevCartProducts) =>
            prevCartProducts.filter((item) => item.id !== id)
          );
        }
        return updatedProduct;
      }
      return product;
    });
    setProductsState(newProducts);
  };

  return (
    <div>
      <div className="sunscreen-main-content">
        <div className="sunscreen-header">
          <p className="sunscreen-title">
            {selectedCategory ? selectedCategory : "Cleansers"}
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
                <img src={product.img} alt="Product" />
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
              <p className="prodDesc">{product.desc}</p>
              <p>{product.sold} sold</p>
              <p className="prodPrice">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exfoliators;
