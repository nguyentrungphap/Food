import instance from "..";

export const getCategoriesAPI = () => {
  return instance.get("/Categories");
};
