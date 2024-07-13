import React, { createContext, useState, useContext } from "react";

// Create the Products Context
const ProductsContext = createContext();

// Create a custom hook to use the Products Context
export const useProducts = () => {
  return useContext(ProductsContext);
};

// Define the Products Provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Add a product to the list
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // Update a product in the list
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Remove a product from the list
  const removeProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Clear the entire product list
  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        removeProduct,
        clearProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
