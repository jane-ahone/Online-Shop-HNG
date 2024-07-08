import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/ProductListings/Home.jsx";
import HomeCategory from "./components/CategoryProducts/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Cleansers from "./components/CategoryProducts/Cleansers/Cleaners.jsx";
import Masks from "./components/CategoryProducts/Masks/Masks.jsx";
import Exfoliators from "./components/CategoryProducts/Exfoliators/Exfoliators.jsx";
import Toners from "./components/CategoryProducts/Toners/Toners.jsx";
import Moisturizers from "./components/CategoryProducts/Moisturisers/Moisturizers.jsx";
import Treatments from "./components/CategoryProducts/Treatments/Treatments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCategory />,
  },
  {
    path: "/sunscreens",
    element: <HomeCategory />,
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
