import instance from "..";

export const getLoginsAPI = () => {
  return instance.get("/users");
};
