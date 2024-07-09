import React, { useState } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Cart from "../Global/Cart/Cart";
import Cleansers from "./Cleansers";
import "./Home.css";
import Header from "../Global/Header/Header";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
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
        <Cleansers selectedCategory={selectedCategory} />
        {/* <span className="page-number">1</span> */}
      </div>
    </div>
  );
};

export default Home;
