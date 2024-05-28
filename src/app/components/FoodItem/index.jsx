import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";

const FoodItem = ({ item, category }) => {
  const dispatch = useDispatch();
  const handleAddToCartClick = () => {
    dispatch(
      addToCart({
        productId: item.ProductID,
      })
    );
  };

  const renderPriceSection = () => {
    return item.Sale > 0 ? (
      <>
        <span className={styles.newPrice}>{`$${item.Sale}`}</span>
        {item.old_price && (
          <span className={styles.oldPrice}>{`$${item.Price}`}</span>
        )}
      </>
    ) : (
      <span className={styles.price}>{`$${item.Price}`}</span>
    );
  };

  const renderProductItem = () => {
    return (
      <div key={item.ProductID} className={styles.foodItem}>
        <img src={item.ProductImage} alt={item.ProductName} />
        <div className={styles.info}>
          <h3>{item.ProductName}</h3>
          <div className={styles.priceContainer}>{renderPriceSection()}</div>
        </div>
        <div className={styles.buy}>
          <Link to={`/detailProduct/${item.ProductID}`}>
            <button className={styles.detailButton}>Detail</button>
          </Link>
          <button onClick={() => handleAddToCartClick(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return category === 0
    ? renderProductItem()
    : category === item.CategoryID
    ? renderProductItem()
    : null;
};

export default FoodItem;
