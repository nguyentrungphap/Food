import { createBrowserRouter } from "react-router-dom";

import Home from "../app/pages/Home";
import Register from "../app/pages/Register";
import PageNotFound from "./../app/pages/PageNotFound/index";
import Cart from "./../app/pages/Cart/index";
import Login from "../app/pages/Login";
import Shop from "./Shop";
import ApplicationLayout from "./Shop/ApplicationLayout";
import EmptyLayout from "./Shop/EmptyLayout";
import StoreApp from "./StoreApp";
import DetailProduct from "../app/pages/DetailProduct";

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
              {
                path: "detailProduct/:id",
                element: <DetailProduct />,
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
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
