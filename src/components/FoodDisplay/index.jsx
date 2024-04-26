import React from "react";
import Style from "./style.module.scss";
import FoodItem from "../FoodItem";
import { food_list } from "../../asset/data";
const FoodDisplay = () => {
  return (
    <div className={Style.FoodDisplay}>
      {food_list.map((item, index) => {
        return <FoodItem key={index} item={item} />;
      })}
    </div>
  );
};

export default FoodDisplay;
