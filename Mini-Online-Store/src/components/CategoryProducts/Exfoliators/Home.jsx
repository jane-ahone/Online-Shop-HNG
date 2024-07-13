import React, { useState } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Cart from "../Global/Cart/Cart";
import Exfoliators from "./Exfoliators";
// import "./Home.css";
import Header from "../Global/Header/Header";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

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
        <Sidebar />
        <Exfoliators />
        {/* <span className="page-number">1</span> */}
      </div>
    </div>
  );
};

export default Home;
