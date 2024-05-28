import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/product/selector";

import FoodItem from "../FoodItem";
import Style from "./style.module.scss";

const FoodDisplay = ({ category }) => {
  const products = useSelector(selectProducts);

  const renderProducts = (category) => {
    return products.map((item, index) => {
      return <FoodItem key={index} item={item} category={category} />;
    });
  };

  return <div className={Style.FoodDisplay}>{renderProducts(category)}</div>;
};

export default FoodDisplay;
