import instance from "..";

export const getCartAdminAPI = () => {
  return instance.get("/carts");
};
