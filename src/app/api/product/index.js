import instance from "..";

export const getProductsAPI = () => {
  return instance.get("/Products");
};
export const postProductsAPI = () => {
  return instance.post("/Products", {});
};
