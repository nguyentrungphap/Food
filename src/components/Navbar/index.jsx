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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
