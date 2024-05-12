import React from "react";
import Style from "./style.module.scss";

const Hero = () => {
  return (
    <div className={Style.Hero}>
      <div className={Style.Content}>
        <h1>Delve into Culinary Delights</h1>
        <p>
          Discover a world of flavors and dining experiences designed to delight
          your senses and inspire your palate
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
