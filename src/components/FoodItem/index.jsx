import React from "react";
import Style from "./style.module.scss";

const FoodItem = ({ item }) => {
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
        </div>{" "}
      </div>
      <div className={Style.Buy}>
        <button className={Style.BuyButton}>Buy</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
