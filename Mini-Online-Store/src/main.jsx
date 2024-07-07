import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./components/Home/Home.jsx";
import Sunscreen from "./components/Sunscreen/Sunscreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sunscreen",
    element: <Sunscreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
