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
    path: "/cleansers",
    element: <Cleansers />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
