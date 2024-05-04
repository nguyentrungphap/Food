import { Type } from "./type";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART: {
      return { cart: [...state.cart, action.payload] };
    }
    // case Type.REMOVE_TO_CART: {
    //   console.log("removetoCart");
    //   return state;
    // }
    default:
      return state;
  }
};
