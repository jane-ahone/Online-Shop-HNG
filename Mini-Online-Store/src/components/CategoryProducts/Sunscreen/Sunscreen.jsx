import React, { useState } from "react";
import product1 from "../../../assets/images/product-listings/image 4.svg";
import product2 from "../../../assets/images/product-listings/image 5.svg";
import product3 from "../../../assets/images/product-listings/image 6.svg";
import product4 from "../../../assets/images/product-listings/image 7.svg";
import product5 from "../../../assets/images/product-listings/image 8.svg";
import product6 from "../../../assets/images/product-listings/image 9.svg";
import product7 from "../../../assets/images/product-listings/image 10.svg";
import product8 from "../../../assets/images/product-listings/image 11.svg";
import product9 from "../../../assets/images/product-listings/image 12.svg";

import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";
import "./Sunscreen.css";
import { Link } from "react-router-dom";

const Sunscreen = ({ selectedCategory, selectedCartProductState }) => {
  const products = [
    {
      id: 2,
      image: product2,
      description: "Black Girl Sunscreen SPF 30",
      sold: "4700",
      price: 90,
      quantity: 1,
      like: false,
      cart: false,
    },
    {
      id: 3,
      image: product3,
      description: "Coola Refreshing Water Plumping Gel Serum SPF 30",
      sold: "9000",
      price: 15,
      quantity: 1,
      like: false,
      cart: false,
    },
    {
      id: 4,
      image: product4,
      description: "Supergoop Play Everyday Lotion SPF 50",
      sold: "200",
      price: 785,
      quantity: 1,
      like: false,
      cart: false,
    },

    {
      id: 5,
      image: product5,
      description: "Dr. Jart+ Mineral Sunscreen SPF 50+",
      sold: "8,100",
      price: 12,
      quantity: 1,
      like: false,
      cart: false,
    },
    {
      id: 6,
      image: product6,
      description: "Trader Joe’s Daily Facial Sunscreen SPF 40",
      sold: "1380",
      price: 53,
      quantity: 1,
      like: false,
      cart: false,
    },
    {
      id: 7,
      image: product7,
      description: "Dr. M Mineral Sunscreen SPF 50+",
      sold: "653",
      price: 87,
      quantity: 1,
      like: false,
      cart: false,
    },
    {
      id: 8,
      image: product8,
      description: "Dr. Jart+ Mineral Sunscreen SPF 50+",
      sold: "21,000",
      price: 75,
      quantity: 1,
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
                <img src={product.image} alt="Product" />
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
              <p className="prodDesc">{product.description}</p>
              <p>{product.sold} sold</p>
              <p className="prodPrice">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sunscreen;
