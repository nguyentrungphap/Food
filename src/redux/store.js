import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./product/slice";
import categoryReducer from "./category/slice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});

export const store = createStore(rootReducer);
