import React from "react";
import Style from "./style.module.scss";
import { menu_list } from "./../../asset/data";
const ExploreMenu = () => {
  return (
    <section className={Style.ExploreMenu}>
      <div className={Style.Container}>
        <h2 className={Style.Title}>Discover Our Menu</h2>
        <div className={Style.Items}>
          {menu_list.map((item, index) => (
            <div key={index} className={Style.Item}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;
