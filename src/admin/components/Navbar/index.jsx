import React from "react";
import Style from "./style.module.scss";
import Logo from "../../asset/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={Style.Navbar}>
      <div className={Style.Logo}>
        <Link to="/StoreAdmin">
          <img src={Logo} alt="My Logo" />
        </Link>
      </div>
      <ul className={Style.Links}>
        <li>
          <Link to="/StoreAdmin">Dashboards</Link>
        </li>
        <li>
          <Link to="/StoreAdmin/CartAdmin">Cart</Link>
        </li>
        <li>
          <Link to="/services">Product</Link>
        </li>
        <li>
          <Link to="/contact">User</Link>
        </li>
      </ul>
      <div className={Style.Users}>
        <div className={Style.Cart}>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
        <Link to="Login">
          <AccountCircleIcon />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
