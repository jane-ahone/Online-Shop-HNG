import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./components/ProductListings/Home.jsx";
import Sunscreen from "./components/CategoryProducts/Sunscreen/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Cleansers from "./components/CategoryProducts/Cleansers/Home.jsx";
import Masks from "./components/CategoryProducts/Masks/Home.jsx";
import Exfoliators from "./components/CategoryProducts/Exfoliators/Home.jsx";
import Toners from "./components/CategoryProducts/Toners/Home.jsx";
import Moisturizers from "./components/CategoryProducts/Moisturisers/Home.jsx";
import Treatments from "./components/CategoryProducts/Treatments/Home.jsx";
import Cart from "./components/CategoryProducts/Global/Cart/Cart.jsx";
import Sidebar from "./components/CategoryProducts/Global/Sidebar/Sidebar.jsx";
import Category from "./components/Category/Category.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { ProductsProvider } from "./Context/ProductsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sunscreen />,
  },
  {
    path: "/sunscreens",
    element: <Sunscreen />,
  },
  {
    path: "/all products",
    element: <Home />,
  },

  {
    path: "/masks",
    element: <Masks />,
  },
  {
    path: "/exfoliators",
    element: <Exfoliators />,
  },
  {
    path: "/moisturisers",
    element: <Moisturizers />,
  },
  {
    path: "/toners",
    element: <Toners />,
  },
  {
    path: "/treatments",
    element: <Treatments />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
