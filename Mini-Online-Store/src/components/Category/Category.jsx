import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-main">
      <p className="sidebar-title">Categories</p>
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
          >
            <p>{category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
