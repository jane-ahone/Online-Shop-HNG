import React, { useState } from "react";
import product1 from "../../../assets/images/product-listings/image 10.svg";
import product2 from "../../../assets/images/product-listings/image 9.svg";
import product3 from "../../../assets/images/product-listings/image 6.svg";
import product4 from "../../../assets/images/product-listings/image 12.svg";
import product5 from "../../../assets/images/product-listings/image 10.svg";
import product6 from "../../../assets/images/product-listings/image 12.svg";
import product7 from "../../../assets/images/product-listings/image 9.svg";
import product8 from "../../../assets/images/product-listings/image 6.svg";
import product9 from "../../../assets/images/product-listings/image 9.svg";
import exit from "../../../assets/icons/multiplication-sign-icon.svg";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
import "./Sunscreen.css";

const Sunscreen = ({ selectedCategory }) => {
  const products = [
    {
      id: 1,
      img: product1,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 2,
      img: product2,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 3,
      img: product3,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 4,
      img: product4,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 5,
      img: product5,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 6,
      img: product6,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 7,
      img: product7,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 8,
      img: product8,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 9,
      img: product9,
      desc: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
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
    const newProducts = productsState.map((product) =>
      product.id === id ? { ...product, cart: !product.cart } : product
    );
    setProductsState(newProducts);
  };

  return (
    <div>
      <div className="sunscreen-main-content">
        <p className="sunscreen-title">{selectedCategory}</p>
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
              <p className="prodPrice">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sunscreen;
