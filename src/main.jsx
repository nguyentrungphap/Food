import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import App from "./pages/App.jsx";
import Cart from "./pages/Cart/index.jsx";
import Login from "./pages/Login/index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
