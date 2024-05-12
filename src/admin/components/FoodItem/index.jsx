import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartAdmin/cartAdminSlice";

import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleAddToCartClick = () => {
    dispatch(
      addToCart({
        productId: item.id,
      })
    );
  };
  const handleBuyProduct = () => {
    dispatch(
      addToCart({
        productId: item.id,
      })
    );
    navigator("/cart");
  };

  const renderPriceSection = () => {
    return item.new_price > 0 ? (
      <>
        <span className={styles.newPrice}>{`$${item.new_price}`}</span>
        {item.old_price && (
          <span className={styles.oldPrice}>{`$${item.old_price}`}</span>
        )}
      </>
    ) : (
      <span className={styles.price}>{`$${item.old_price}`}</span>
    );
  };

  return (
    <div key={item.id} className={styles.foodItem}>
      <img src={item.image} alt={item.name} />
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className={styles.priceContainer}>{renderPriceSection()}</div>
      </div>
      <div className={styles.buy}>
        <button className={styles.buyButton} onClick={handleBuyProduct}>
          Buy
        </button>
        <button onClick={handleAddToCartClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
