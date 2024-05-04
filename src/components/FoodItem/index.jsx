import React from "react";
import Style from "./style.module.scss";
import { connect, useDispatch } from "react-redux";
import { addtoCart } from "../../redux/action";

const FoodItem = ({ item, addtoCart }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(
      addtoCart({
        id: item.id,
        name: item.name,
        old_price: item.oldPrice,
        new_price: item.newPrice,
      })
    );
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
        <button onClick={handleAddtoCart}>Add to cart</button>
      </div>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    cart: state.cart.cart,
  };
}

function mapDispathoProps(dispatch) {
  return {
    addtoCart: (item) => dispatch(addtoCart(item)),
  };
}

export default connect(mapStatetoProps, mapDispathoProps)(FoodItem);
