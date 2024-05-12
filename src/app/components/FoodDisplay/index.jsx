import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/product/selector";

import FoodItem from "../FoodItem";
import Style from "./style.module.scss";

const FoodDisplay = () => {
  const products = useSelector(selectProducts)

  const renderProducts = () => {
    return products.map((item, index) => {
      return <FoodItem key={index} item={item} />;
    })
  }
  return (
    <div className={Style.FoodDisplay}>
      {renderProducts()}
    </div>
  );
};

export default FoodDisplay;
