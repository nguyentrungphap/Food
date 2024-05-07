import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";
import { getProductsAPI } from "../../api/product";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/product/slice";
import { getCategoriesAPI } from "../../api/categories";
import { setCategories } from "../../redux/category/slice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    const response = await getProductsAPI();
    const products = response.data;
    dispatch(setProducts(products));
  };
  const getCategories = async () => {
    const response = await getCategoriesAPI();
    const categories = response.data;
    dispatch(setCategories(categories));
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
