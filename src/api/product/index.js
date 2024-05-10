import instance from "..";

export const getProductsAPI = () => {
  return instance.get("/products");
};
export const postProductsAPI = () => {
  return instance.post("/products", {});
};
