import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getCartAdminAPI } from "../../admin/api/cart";
import { getProductsAPI } from "../../app/api/product";
import { getCategoriesAPI } from "../../app/api/categories";
import { setCategories } from "../../app/redux/category/slice";
import { setProducts } from "../../app/redux/product/slice";
import { setCartAdmin } from "../../admin/redux/cartAdmin/cartAdminSlice";
import { useDispatch } from "react-redux";
import { setLogins } from "../../app/redux/login/loginSlice";
import { getLoginsAPI } from "./../../app/api/auth/index";

function StoreApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    getCategories();
    getCartAdmin();
    getUserAccounts();
  }, []);

  const getCartAdmin = async () => {
    const response = await getCartAdminAPI();
    const cart = response.data;
    console.log("test", cart);
    dispatch(setCartAdmin(cart));
  };

  const getUserAccounts = async () => {
    const response = await getLoginsAPI();
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
