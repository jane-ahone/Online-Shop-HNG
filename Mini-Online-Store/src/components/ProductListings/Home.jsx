import React, { useState } from "react";
import { Link } from "react-router-dom";
import catIcon from "../../assets/icons/cat-icon.svg";
import cartIcon from "../../assets/icons/icon-shopping-bag.svg";
import Header from "../CategoryProducts/Global/Header/Header";
import heartIcon from "../../assets/icons/heart-icon.svg";
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
import "./Home.css";
import Overlay from "../CategoryProducts/Overlay/Overlay";
import Cart from "../CategoryProducts/Global/Cart/Cart";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

  const products = [
    {
      id: 2,
      image: product2,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 3,
      image: product3,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 4,
      image: product4,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 5,
      image: product5,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 6,
      image: product6,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 7,
      image: product7,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 8,
      image: product8,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 9,
      image: product9,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },

    {
      id: 15,
      image: product15,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 16,
      image: product16,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 17,
      image: product17,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 18,
      image: product18,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },

    {
      id: 13,
      image: product13,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },

    {
      id: 19,
      image: product19,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 20,
      image: product20,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 21,
      image: product21,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },

    {
      id: 22,
      image: product22,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 23,
      image: product23,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 24,
      image: product24,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 25,
      image: product25,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 26,
      image: product26,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 27,
      image: product27,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
    {
      id: 28,
      image: product28,
      description: "Banana Boat Light As Air SPF 50+",
      sold: "13,000",
      price: "$75",
    },
  ];

  return (
    <div className="productlistings-home-main">
      <Header setCartVisibility={setCartVisibility} />
      {cartVisibility && (
        <>
          <Overlay />
          <Cart setCartVisibility={setCartVisibility} />
        </>
      )}

      <div className="productlisting-content">
        <div className="productlistings-header">
          <p className="productlistings-title">All Products</p>
          <Link to="/sunscreens">
            <div className="toggle-filter">
              <span>Filter by Category</span>
              <img src={toggleFilter} alt="Filter" />
            </div>
          </Link>
        </div>

        {products.map((product) => (
          <div key={product.id} className={`product${product.id}`}>
            <img src={product.image} alt={product.description} />
            <p className="prodDesc">{product.description}</p>
            <p>{product.sold} sold</p>
            <p className="prodPrice">{product.price}</p>
          </div>
        ))}
      </div>

      {/* <span className="page-number">1</span> */}
    </div>
  );
};

export default Home;
