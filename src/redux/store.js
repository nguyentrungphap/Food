import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./product/slice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export const store = createStore(rootReducer);
