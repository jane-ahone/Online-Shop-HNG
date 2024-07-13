import React, { createContext, useState, useContext } from "react";

// Create the Products Context
const ProductsContext = createContext();

// Create a custom hook to use the Products Context
export const useProducts = () => {
  return useContext(ProductsContext);
};

// Define the AllProducts Provider component
export const AllProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  // Add a product to the list
  const addProduct = (product) => {
    setAllProducts((prevProducts) => [...prevProducts, product]);
  };

  // Update a product in the list
  const updateProduct = (updatedProduct) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Remove a product from the list
  const removeProduct = (productId) => {
    setAllProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Clear the entire product list
  const clearProducts = () => {
    setAllProducts([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
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
