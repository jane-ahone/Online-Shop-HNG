import React from "react";
import "./Header.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import logo from "../../../../assets/icons/logo.svg";

const Header = ({ setCartVisibility }) => {
  const handleCartClick = () => {
    setCartVisibility((prevState) => !prevState);
  };

  return (
    <div className="headerMain">
      <Link to="/" className="header-logo">
        <img src={logo} />
      </Link>
      <div className="search-btn">
        <input type="text" placeholder="Search" className="search-btn-input" />
        <span>
          <svg
            className="search-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="#fafafa"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="#fafafa"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="header icon-group">
        <div className="cart-page" onClick={handleCartClick}>
          <svg
            width="48"
            height="46"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="22.5" stroke="#CBCBCB" />
            <path
              d="M14.8729 28.0194L13.6693 20.8398C13.4873 19.7543 13.3964 19.2115 13.6877 18.8558C13.9791 18.5 14.5146 18.5 15.5856 18.5H30.4144C31.4854 18.5 32.0209 18.5 32.3123 18.8558C32.6036 19.2115 32.5126 19.7543 32.3307 20.8398L31.1271 28.0194C30.7282 30.3991 30.5287 31.5889 29.7143 32.2945C28.9 33 27.726 33 25.3782 33H20.6218C18.274 33 17.1 33 16.2856 32.2945C15.4713 31.5889 15.2718 30.3991 14.8729 28.0194Z"
              stroke="#fafafa"
              strokeWidth="1.5"
            />
            <path
              d="M28.5 18.5C28.5 15.4624 26.0376 13 23 13C19.9624 13 17.5 15.4624 17.5 18.5"
              stroke="#fafafa"
              strokeWidth="1.5"
            />
            <circle cx="40" cy="11" r="8" fill="#fafafa" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;