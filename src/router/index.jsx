import { createBrowserRouter } from "react-router-dom";

import Home from "../app/pages/Home";
import Register from "../app/pages/Register";
import PageNotFound from "./../app/pages/PageNotFound/index";
import Cart from "./../app/pages/Cart/index";
import Login from "../app/pages/Login";
import Shop from "./Shop";
import ApplicationLayout from "./Shop/ApplicationLayout";
import EmptyLayout from "./Shop/EmptyLayout";
import Admin from "./Admin";
import StoreApp from "./StoreApp";
import HomeAdmin from "../admin/pages/HomeAdmin";
import ApplicationLayoutAdmin from "./Admin/ApplicationLayoutAdmin";
import CartAdmin from "../admin/pages/CartAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreApp />,
    children: [
      {
        element: <Shop />,
        children: [
          {
            element: <ApplicationLayout />,
            children: [
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "cart",
                element: <Cart />,
              },
            ],
          },
          {
            element: <EmptyLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
            ],
          },
        ],
      },
      {
        path: "StoreAdmin",
        element: <Admin />,
        children: [
          {
            element: <ApplicationLayoutAdmin />,
            children: [
              {
                path: "",
                element: <HomeAdmin />,
              },
              {
                path: "CartAdmin",
                element: <CartAdmin />,
              },
            ],
          },
          {
            element: <EmptyLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*", // For unmatched paths
    element: <PageNotFound />,
  },
]);

export default router;
