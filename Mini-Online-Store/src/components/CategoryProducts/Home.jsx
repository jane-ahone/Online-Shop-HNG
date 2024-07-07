import React from "react";
import Sidebar from "./Sidebar";
import Cart from "./Cart/Cart";
import Sunscreen from "./Sunscreen/Sunscreen";
import "./Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="homeMain">
      <Header />
      <Cart />

      <div className="homeMain-contents">
        <Sidebar />
        <Sunscreen />
      </div>
    </div>
  );
};

export default Home;
