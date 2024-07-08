import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Cart from "./Cart/Cart";
import Sunscreen from "./Sunscreen/Sunscreen";
import "./Home.css";
import Header from "./Header";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  return (
    <div className="homeMain">
      <Header />
      <Cart />
      <div className="homeMain-contents">
        <Sidebar />
        <Sunscreen />
        <span className="page-number">1</span>
      </div>
    </div>
  );
};

export default Home;
