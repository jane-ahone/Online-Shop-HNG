import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ selectedCategoryState }) => {
  const handleCategoryClick = (category) => {
    selectedCategoryState.set(category);
  };

  return (
    <div className="sidebarMain">
      <div className="Category">
        <p className="sidebar-title">Category</p>
        <div className="category-contents">
          {[
            "All Products",
            "Cleansers",
            "Toners",
            "Moisturisers",
            "Masks",
            "Sunscreens",
            "Exfoliators",
            "Treatments",
          ].map((category) => (
            <Link
              to={`/${category.toLowerCase()}`}
              state={category}
              key={category}
              // onClick={() => handleCategoryClick(category)}
            >
              <p
              // className={
              //   selectedCategoryState.get() === category
              //     ? "active-category"
              //     : ""
              // }
              >
                {category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
