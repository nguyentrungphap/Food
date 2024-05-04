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

export const ADD_TO_CART = (data) => {
  return {
    type: Type.ADD_TO_CART,
    payload: data,
  };
};

// export const REMOVE_TO_CART = (data) => {
//   return {
//     type: Type.REMOVE_TO_CART,
//     payload: data,
//   };
// };
