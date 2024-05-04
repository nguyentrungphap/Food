import { Type } from "./type";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case Type.addtoCart: {
      return { cart: [...state.cart, action.payload] };
    }
    case Type.removetoCart: {
      console.log("removetoCart");
      return state;
    }
    default:
      return state;
  }
};
