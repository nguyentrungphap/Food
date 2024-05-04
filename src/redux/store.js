import { combineReducers, createStore } from "redux";
import { counterReducer } from "./coutReducer";
import { CartReducer } from "./reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  cart: CartReducer,
});

export const store = createStore(rootReducer);
