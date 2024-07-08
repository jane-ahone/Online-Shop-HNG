import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import checkbox from "../../assets/icons/btn-unchecked.svg";
import logo from "../../assets/icons/logo.svg";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarMain">
      <div className="Category">
        <p className="sidebar-title">Category</p>
        <div className="category-contents">
          <p>Cleansers</p>
          <p>Toners</p>
          <p>Moisturisers</p>
          <p>Masks</p>
          <Link to="/sunscreen">
            <p>Sunscreens</p>
          </Link>
          <p>Exfoliators</p>
          <p>Treatments</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
