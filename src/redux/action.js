import { Type } from "./type";

export const increaseCount = () => {
  return {
    type: Type.increaseCount,
  };
};

export const decreaseCount = () => {
  return {
    type: Type.decreaseCount,
  };
};

export const addtoCart = (data) => {
  return {
    type: Type.addtoCart,
    payload: data,
  };
};
export const removetoCart = (data) => {
  return {
    type: Type.removetoCart,
    payload: data,
  };
};
