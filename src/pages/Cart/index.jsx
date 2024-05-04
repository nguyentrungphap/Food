import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/selector";

import Style from "./style.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems)

  const renderCartItems = () => {
    return cartItems.map(item => {
      return <div>
        <p>{item.productId}</p>
        <p>{item.quantity}</p>
      </div>
    })
  }
  
  return (
    <div className={Style.Cart}>
      <h2>Your Shopping Cart</h2>
      <div className={Style.CartContent}>
        <div className={Style.TopCart}>
          <p>Name</p>
          <p>Image</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {renderCartItems()}
      </div>
    </div>
  );
};

export default Cart;
