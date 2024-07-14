import React, { useState } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Cart from "../Global/Cart/Cart";
import Sunscreen from "./Sunscreen";
import "./Home.css";
import Header from "../Global/Header/Header";
import Overlay from "../Overlay/Overlay";

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
        <Sunscreen />
      </div>
    </div>
  );
};

export default Home;
