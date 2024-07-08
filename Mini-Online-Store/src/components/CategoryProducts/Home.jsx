import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Cart from "./Cart/Cart";
import Sunscreen from "./Sunscreen/Sunscreen";
import "./Home.css";
import Header from "./Header";
import Overlay from "./Overlay/Overlay";
import { Link } from "react-router-dom";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Sunscreens");
  return (
    <div className="homeMain">
      <Header setCartVisibility={setCartVisibility} />
      {cartVisibility ? (
        <>
          <Overlay />
          <Cart setCartVisibility={setCartVisibility} />
        </>
      ) : null}

      <div className="homeMain-contents">
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <Sunscreen selectedCategory={selectedCategory} />
        <span className="page-number">1</span>
      </div>
    </div>
  );
};

export default Home;
