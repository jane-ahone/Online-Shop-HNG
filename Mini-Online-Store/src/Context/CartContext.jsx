import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
