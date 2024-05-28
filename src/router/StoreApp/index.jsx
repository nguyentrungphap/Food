import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getProductsAPI } from "../../app/api/product";
import { getCategoriesAPI } from "../../app/api/categories";
import { setCategories } from "../../app/redux/category/slice";
import { setProducts } from "../../app/redux/product/slice";
import { useDispatch } from "react-redux";
import { setLogins } from "../../app/redux/login/loginSlice";
import { getCustomersApi } from "../../app/api/customers";

function StoreApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    getCategories();
    getUserAccounts();
  }, []);

  const getUserAccounts = async () => {
    const response = await getCustomersApi();
    const accounts = response.data;
    dispatch(setLogins(accounts));
  };

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
  return <Outlet />;
}

export default StoreApp;
