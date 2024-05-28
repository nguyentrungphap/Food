import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/category/selector";
import Style from "./style.module.scss";
import FoodDisplay from "./../FoodDisplay/index";

const ExploreMenu = () => {
  const [category, setCategory] = useState(0);
  const categories = useSelector(selectCategories);
  console.log(categories);
  const renderCategories = () => {
    return categories.map((item) => (
      <div
        key={item.id}
        className={Style.Item}
        onClick={() => {
          setCategory(item.CategoryID);
        }}
      >
        <h3>{item.CategoryName}</h3>
      </div>
    ));
  };
  console.log(category);
  return (
    <>
      <section className={Style.ExploreMenu}>
        <div className={Style.Container}>
          <h2 className={Style.Title}>Discover Our Menu</h2>
          <div className={Style.Items}>
            <div
              className={Style.Item}
              onClick={() => {
                setCategory(0);
              }}
            >
              <h3>All Product</h3>
            </div>
            {renderCategories()}
          </div>
        </div>
      </section>
      <FoodDisplay category={category} />
    </>
  );
};

export default ExploreMenu;
