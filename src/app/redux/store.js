import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./product/slice";
import categoryReducer from "./category/slice";
import loginReducer from "./login/loginSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer);
