import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ApplicationLayout from "./ApplicationLayout";
import EmptyLayout from "./EmptyLayout";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/",
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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
