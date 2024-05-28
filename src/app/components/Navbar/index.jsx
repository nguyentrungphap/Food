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
        <Link to="/">
          <img src={Logo} alt="My Logo" />
        </Link>
      </div>
      <ul className={Style.Links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
