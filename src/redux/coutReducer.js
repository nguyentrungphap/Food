import { Type } from "./type";

const initialState = {
  count: 5,
};

export const counterReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case Type.increaseCount: {
      console.log("increaseCount", state);
      return {
        count: (state.count += 1),
      };
    }
    case Type.decreaseCount: {
      console.log("decreaseCount");
      return {
        count: (state.count -= 1),
      };
    }
    default:
      return state;
  }
};
