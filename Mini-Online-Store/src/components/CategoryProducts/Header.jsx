import React from "react";
import "./Header.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/icons/avatar-icon.svg";

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
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="23" r="22.5" stroke="#CBCBCB" />
          <path
            d="M30.4626 14.9942C27.7809 13.3492 25.4404 14.0121 24.0344 15.068C23.4578 15.501 23.1696 15.7174 23 15.7174C22.8304 15.7174 22.5422 15.501 21.9656 15.068C20.5596 14.0121 18.2191 13.3492 15.5374 14.9942C12.0181 17.1529 11.2217 24.2749 19.3395 30.2834C20.8857 31.4278 21.6588 32 23 32C24.3412 32 25.1143 31.4278 26.6605 30.2834C34.7783 24.2749 33.9819 17.1529 30.4626 14.9942Z"
            stroke="#fafafa"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

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
              stroke-width="1.5"
            />
            <path
              d="M28.5 18.5C28.5 15.4624 26.0376 13 23 13C19.9624 13 17.5 15.4624 17.5 18.5"
              stroke="#fafafa"
              stroke-width="1.5"
            />
            <circle cx="40" cy="11" r="8" fill="#fafafa" />
          </svg>
        </div>
        {/* <img src={avatar}></img> */}
      </div>
    </div>
  );
};

export default Header;
