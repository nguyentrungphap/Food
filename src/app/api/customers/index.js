import instance from "..";

export const getCustomersApi = () => {
  return instance.get("/Customers");
};
