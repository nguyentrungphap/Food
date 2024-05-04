import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";
import { getProductsAPI } from "../../api/product";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/product/slice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getProductsAPI();
    const products = response.data;
    dispatch(setProducts(products));
  };

  return (
    <div>
      <Hero />
      <ExploreMenu />
      <FoodDisplay />
    </div>
  );
}

export default Home;
