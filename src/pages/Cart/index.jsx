import React from "react";
import Style from "./style.module.scss";

const Cart = () => {
  return (
    <div className={Style.Cart}>
      <h2>Your Shopping Cart</h2>
      <div className={Style.CartContent}>
        <div className={Style.TopCart}>
          <p>Name</p>
          <p>Image</p>
          <p>Price</p>
          <p>Quatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Cart;
