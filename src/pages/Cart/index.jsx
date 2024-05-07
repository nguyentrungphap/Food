import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/selector";
import { removeFromCart } from "../../redux/cart/cartSlice";

import { selectProducts } from "../../redux/product/selector";
import Style from "./style.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  console.log({ cartItems });
  console.log({ products });
  const handleRemoveFromCart = (id) => {
    dispatch(
      removeFromCart({
        productId: id,
      })
    );
  };
  const renderCartItems = () => {
    return cartItems.map((item, index) => {
      const product = products[Number(item.productId) - 1];
      if (item.productId === product.id) {
        return (
          <div className={`${Style.TopCart} ${Style.itemCart}`} key={index}>
            <p>{product.name}</p>
            <img src={product.image} alt={product.name} />
            <p>
              {product.new_price > 0 ? product.new_price : product.old_price}
            </p>
            <p>{item.quantity}</p>
            <p>
              Total:
              {product.new_price > 0
                ? product.new_price * item.quantity
                : product.old_price * item.quantity}
            </p>
            <button onClick={() => handleRemoveFromCart(item.productId)}>
              Remove
            </button>
          </div>
        );
      }
      return;
    });
  };

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
