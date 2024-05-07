import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";

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

export default router;