import React from "react";
import Style from "./style.module.scss";
import { connect, useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/action";

const FoodItem = ({ item, ADD_TO_CART, Cart }) => {
  const dispatch = useDispatch();
  const handleADD_TO_CART = () => {
    dispatch(
      ADD_TO_CART({
        id: item.id,
        name: item.name,
        old_price: item.old_price,
        new_price: item.new_price,
      })
    );
    console.log({ Cart });
  };

  return (
    <div key={item.id} className={Style.FoodItem}>
      <img src={item.image} alt={item.name} />
      <div className={Style.Info}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className={Style.priceContainer}>
          {item.new_price > 0 ? (
            <>
              <span className={Style.newPrice}>{`$${item.new_price}`}</span>
              {item.old_price && (
                <span className={Style.oldPrice}>{`$${item.old_price}`}</span>
              )}
            </>
          ) : (
            <span className={Style.price}>{`$${item.old_price}`}</span>
          )}
        </div>
      </div>
      <div className={Style.Buy}>
        <button className={Style.BuyButton}>Buy</button>
        <button onClick={handleADD_TO_CART}>Add to cart</button>
      </div>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    cart: state.cart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ADD_TO_CART: (item) => dispatch(ADD_TO_CART(item)),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(FoodItem);
