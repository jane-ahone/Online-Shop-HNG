import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import exit from "../../assets/icons/multiplication-sign-icon.svg";

const Category = () => {
  return (
    <div className="category-main">
      <div className="category-main-header">
        <p className="category-main-title">Categories</p>
        <Link to="/all products">
          <img src={exit} alt="" className="exit-icon" />
        </Link>
      </div>
      <div className="category-main-contents">
        {[
          "All Products",
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
          >
            <p>{category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
