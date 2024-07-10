import React from "react";
import "./Header.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import logo from "../../../../assets/icons/logo.svg";

const Header = ({ setCartVisibility, selectedCartProductState }) => {
  const handleCartClick = () => {
    setCartVisibility((prevState) => !prevState);
  };
  const handleSmallCartClick = () => {
    setCartVisibility((prevState) => !prevState);
  };

  return (
    <div className="headerMain">
      <Link to="/" className="header-logo">
        <img className="logo-img" src={logo} />
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
        <div className="cart-page">
          <Link to="/cart" state={selectedCartProductState.get()}>
            <svg
              className="cart-icon-sm"
              // onClick={handleCartClick}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.22733 14.1828L2.22436 8.19984C2.07271 7.29523 1.99689 6.84293 2.23969 6.54647C2.4825 6.25 2.92876 6.25 3.82129 6.25H16.1786C17.0711 6.25 17.5173 6.25 17.7602 6.54647C18.0029 6.84293 17.9271 7.29523 17.7755 8.19984L16.7725 14.1828C16.4401 16.1659 16.2738 17.1574 15.5952 17.7454C14.9166 18.3333 13.9383 18.3333 11.9818 18.3333H8.0181C6.06155 18.3333 5.08328 18.3333 4.40463 17.7454C3.72598 17.1574 3.55976 16.1659 3.22733 14.1828Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
              />
              <path
                d="M14.5834 6.25C14.5834 3.71869 12.5314 1.66666 10.0001 1.66666C7.46877 1.66666 5.41675 3.71869 5.41675 6.25"
                stroke="#FAFAFA"
                strokeWidth="1.5"
              />
            </svg>
          </Link>

          <Link to="/category">
            <svg
              id="menu-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33325 4.16667H16.6666"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33325 10H16.6666"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33325 15.8333H16.6666"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <svg
            onClick={handleCartClick}
            className="cart-icon-bg"
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
            {/* <circle cx="40" cy="11" r="8" fill="#fafafa" /> */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
