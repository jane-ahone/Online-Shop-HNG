import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Sunscreen from "../Sunscreen/Sunscreen";
import "./Home.css";

import Header from "./Header";

const Home = () => {
  return (
    <div className="homeMain">
      <Header />
      <div className="homeMain-contents">
        <Sidebar />
        <Sunscreen />
      </div>
    </div>
  );
};

export default Home;
