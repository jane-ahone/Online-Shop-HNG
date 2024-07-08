import React, { useState } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Cart from "../Global/Cart/Cart";
import Sunscreen from "./Sunscreen";
import "./Home.css";
import Header from "../Global/Header/Header";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

function useSelectedCategory() {
  const [selectedCategory, set] = useState("Sunscreens");
  const get = () => {
    return selectedCategory;
  };

  return { get, set };
}

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const selectedCategoryState = useSelectedCategory();
  console.log(selectedCategoryState);

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
        <Sidebar selectedCategoryState={selectedCategoryState} />
        <Sunscreen selectedCategory={selectedCategoryState.get()} />
        <span className="page-number">1</span>
      </div>
    </div>
  );
};

export default Home;
