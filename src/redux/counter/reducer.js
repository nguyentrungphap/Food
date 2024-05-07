import { Type } from "./type";

const initialState = {
  count: 5,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.increaseCount: {
      return {
        count: (state.count += 1),
      };
    }
    case Type.decreaseCount: {
      return {
        count: (state.count -= 1),
      };
    }
    default:
      return state;
  }
};
