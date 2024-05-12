import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/category/selector";
import Style from "./style.module.scss";

const ExploreMenu = () => {
  const categories = useSelector(selectCategories);
  const renderCategories = () => {
    return categories.map((item) => (
      <div key={item.id} className={Style.Item}>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
    ));
  };
  return (
    <section className={Style.ExploreMenu}>
      <div className={Style.Container}>
        <h2 className={Style.Title}>Discover Our Menu</h2>
        <div className={Style.Items}>{renderCategories()}</div>
      </div>
    </section>
  );
};

export default ExploreMenu;
