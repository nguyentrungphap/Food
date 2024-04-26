import React from "react";
import Hero from "../../components/Hero";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";

function Home() {
  return (
    <div>
      <Hero />
      <ExploreMenu />
      <FoodDisplay />
    </div>
  );
}

export default Home;
