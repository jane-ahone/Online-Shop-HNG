import React, { useState } from "react";
import product1 from "../../../assets/images/Treatments/1.png";
import product2 from "../../../assets/images/Treatments/2.png";
import product3 from "../../../assets/images/Treatments/3.png";
import product4 from "../../../assets/images/Treatments/4.png";
import cartIcon from "../../../assets/icons/icon-shopping-bag.svg";
import cartFilledIcon from "../../../assets/icons/icon-shopping-bag-filled.svg";
import heartIcon from "../../../assets/icons/heart-icon.svg";
import heartFilledIcon from "../../../assets/icons/heart-filled-icon.svg";
// import "./Treatments.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import toggleFilter from "../../../assets/icons/filter-mail-square.svg";

const Treatments = ({ selectedCartProductState }) => {
  const location = useLocation();
  const selectedCategory = location.state;
  const products = [
    {
      id: 1,
      img: product1,
      desc: "Biossance Squalane + Probiotic Gel",
      sold: "13,000",
      price: 75,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      img: product2,
      desc: "Cleanse & Polish Hot Cloth Cleanser",
      sold: "23,000",
      price: 45,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      img: product3,
      desc: "Skin Perfecting 2% BHA Gel",
      sold: "6,020",
      price: 87,
      like: false,
      cart: false,
      quantity: 1,
    },
    {
      id: 4,
      img: product4,
      desc: "La Roche-Posay Cicaplast Balm",
      sold: "7,000",
      price: 25,
      like: false,
      cart: false,
      quantity: 1,
    },
  ];

  const [productsState, setProductsState] = useState(products);

  const toggleLike = (id) => {
    const newProducts = productsState.map((product) =>
      product.id === id ? { ...product, like: !product.like } : product
    );
    setProductsState(newProducts);
  };

  const toggleCart = (id) => {
    const newProducts = productsState.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, cart: !product.cart };
        if (updatedProduct.cart) {
          selectedCartProductState.set((prevCartProducts) => [
            ...prevCartProducts,
            updatedProduct,
          ]);
        } else {
          selectedCartProductState.set((prevCartProducts) =>
            prevCartProducts.filter((item) => item.id !== id)
          );
        }
        return updatedProduct;
      }
      return product;
    });
    setProductsState(newProducts);
  };

  return (
    <div>
      <div className="sunscreen-main-content">
        <div className="sunscreen-header">
          <p className="sunscreen-title">
            {selectedCategory ? selectedCategory : "Cleansers"}
          </p>
          <Link to="/all products">
            <div className="toggle-filter">
              <span className="">Filter by Category</span>
              <img src={toggleFilter} alt="" className="" />
            </div>
          </Link>
        </div>
        <div className="products">
          {productsState.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt="Product" />
                <img
                  src={product.like ? heartFilledIcon : heartIcon}
                  className="heart-icon"
                  onClick={() => toggleLike(product.id)}
                  alt="Like button"
                />
                <img
                  src={product.cart ? cartFilledIcon : cartIcon}
                  className="cart-icon"
                  onClick={() => toggleCart(product.id)}
                  alt="Cart button"
                />
              </div>
              <p className="prodDesc">{product.desc}</p>
              <p>{product.sold} sold</p>
              <p className="prodPrice">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
