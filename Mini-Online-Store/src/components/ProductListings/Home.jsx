import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../CategoryProducts/Global/Header/Header";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";

import product2 from "../../assets/images/product-listings/image 6.svg";
import product3 from "../../assets/images/product-listings/image 12.svg";
import product4 from "../../assets/images/product-listings/image 9.svg";
import product5 from "../../assets/images/product-listings/image 10.svg";
import product6 from "../../assets/images/Cleansers/1.png";
import product7 from "../../assets/images/Cleansers/2.png";
import product8 from "../../assets/images/Cleansers/3.png";
import product9 from "../../assets/images/Cleansers/4.png";
import product10 from "../../assets/images/Exfoliators/1.png";
import product11 from "../../assets/images/Exfoliators/2.png";
import product12 from "../../assets/images/Exfoliators/3.png";
import product13 from "../../assets/images/Exfoliators/4.png";
import product14 from "../../assets/images/Exfoliators/5.png";
import product15 from "../../assets/images/Masks/1.png";
import product16 from "../../assets/images/Masks/2.png";
import product17 from "../../assets/images/Masks/3.png";
import product18 from "../../assets/images/Masks/4.png";
import product19 from "../../assets/images/Masks/5.png";
import product20 from "../../assets/images/Moisturizers/1.png";
import product21 from "../../assets/images/Moisturizers/2.png";
import product22 from "../../assets/images/Toners/1.png";
import product23 from "../../assets/images/Toners/2.png";
import product24 from "../../assets/images/Toners/3.png";
import product25 from "../../assets/images/Treatments/1.png";
import product26 from "../../assets/images/Treatments/2.png";
import product27 from "../../assets/images/Treatments/3.png";
import product28 from "../../assets/images/Treatments/4.png";
import toggleFilter from "../../assets/icons/filter-mail-square.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../assets/icons/heart-filled-icon.svg";
import filterSM from "../../assets/icons/filter-sm.svg";
import "./Home.css";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

  const initialProducts = [
    {
      id: 2,
      image: product2,
      description: "Supergoop Unseen Sunscreen SPF 40",
      sold: "3,000",
      price: "$25",
      like: false,
      cart: false,
    },
    {
      id: 3,
      image: product3,
      description: "Trader Joe’s Daily Facial Sunscreen SPF 40",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 4,
      image: product4,
      description: "Cerave Ultra Absorbent Facial Sunscreen SPF 40",
      sold: "100,000",
      price: "$128",
      like: false,
      cart: false,
    },
    {
      id: 5,
      image: product5,
      description: "Dr. Jart+ Mineral Sunscreen SPF 50+",
      sold: "10,000",
      price: "$15",
      like: false,
      cart: false,
    },

    {
      id: 11,
      image: product11,
      description: "Origins Ginzing Refreshing Scrub",
      sold: "45,000",
      price: "$39",
      like: false,
      cart: false,
    },
    {
      id: 12,
      image: product12,
      description: "Zo Skin Health Exfoliating Polish",
      sold: "17,950",
      price: "$33",
      like: false,
      cart: false,
    },
    {
      id: 13,
      image: product13,
      description: "Fresh Sugar Face Polish",
      sold: "12,988",
      price: "$7",
      like: false,
      cart: false,
    },
    {
      id: 14,
      image: product14,
      description: "SkinMedica Exfoliating Cleanser",
      sold: "54,100",
      price: "$50",
      like: false,
      cart: false,
    },

    {
      id: 20,
      image: product20,
      description: "The Ordinary Natural Moisturizing Factors ",
      sold: "2,000",
      price: "$175",
      like: false,
      cart: false,
    },
    {
      id: 21,
      image: product21,
      description: "L'Oréal Paris Collagen Moisture Filler",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 22,
      image: product22,
      description: "Renée Rouleau facial toner",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },

    {
      id: 23,
      image: product23,
      description: "The Rose & Hyaluronic Acid Deep Toner ",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },

    {
      id: 25,
      image: product25,
      description: "Biossance Squalane + Probiotic Gel",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 26,
      image: product26,
      description: "Cleanse & Polish Hot Cloth Cleanser",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 24,
      image: product24,
      description: "This Freck Beauty face ",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 10,
      image: product10,
      description: "Acure Brightening Facial Scrub",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 6,
      image: product6,
      description: "Hyper Skin Even Gentle Brightening",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 7,
      image: product7,
      description: "Cerave SA Smoothing Cleanser",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 8,
      image: product8,
      description: "Bolden Skin Clarifying Cleanser",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
    {
      id: 9,
      image: product9,
      description: "Blueland Facial Cleanser Starter Set",
      sold: "70,000",
      price: "$75",
      like: false,
      cart: false,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const toggleLike = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, like: !product.like } : product
      )
    );
  };

  const toggleCart = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, cart: !product.cart } : product
      )
    );
  };

  return (
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
            <div className="toggle-filter" id="toggle-filter-sm">
              <img src={filterSM} alt="Filter" />
            </div>
          </Link>
        </div>

        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.description} />
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
            <p className="prodPrice">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
