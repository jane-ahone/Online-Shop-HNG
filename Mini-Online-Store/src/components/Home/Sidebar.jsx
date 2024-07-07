import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import checkbox from "../../assets/icons/btn-unchecked.svg";
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
        <hr></hr>
      </div>

      <div className="Filters">
        <p className="sidebar-title">Filter</p>
        <div className="filter skin-type">
          <p className="sidebar-subtitle">Skin Type</p>
          <div className="checkbox-cntr">
            <img className="checkbox-btn" src={checkbox}></img>
            <span>Dry Skin</span>
          </div>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Oily Skin</span>
          </div>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Sensitive Skin</span>
          </div>
        </div>
        <hr></hr>
        <div className="filter condition">
          <p className="sidebar-subtitle">Skin Type</p>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Acne</span>
          </div>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Wrinkles</span>
          </div>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Even Tone</span>
          </div>
          <div className="checkbox-cntr">
            <img src={checkbox} className="checkbox-btn"></img>
            <span>Dark Circles</span>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="Price">
        <button>Min</button>
        <button>Max</button>
      </div>
    </div>
  );
};

export default Sidebar;
