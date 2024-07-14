import React, { useState } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Cart from "../Global/Cart/Cart";
import Masks from "./Masks";
import Header from "../Global/Header/Header";
import Overlay from "../Overlay/Overlay";

function useSelectedCartProducts() {
  const [selectedCartProducts, set] = useState([]);
  const get = () => {
    return selectedCartProducts;
  };

  return { get, set };
}

const Home = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const selectedCartProductState = useSelectedCartProducts();
  const category = "Mask";
  return (
    <div className="homeMain">
      <Header
        setCartVisibility={setCartVisibility}
        selectedCartProductState={selectedCartProductState}
      />
      {cartVisibility ? (
        <>
          <Overlay />
          <Cart
            setCartVisibility={setCartVisibility}
            selectedCartProductState={selectedCartProductState}
            category={category}
          />
        </>
      ) : null}

      <div className="homeMain-contents">
        <Sidebar />
        <Masks selectedCartProductState={selectedCartProductState} />
        {/* <span className="page-number">1</span> */}
      </div>
    </div>
  );
};

export default Home;
