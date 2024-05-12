import { Type } from "./type";

export const increaseCount = () => {
  return {
    type: Type.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: Type.DECREASE_COUNT,
  };
};
