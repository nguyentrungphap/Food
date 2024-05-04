import { combineReducers, createStore } from "redux";
import { CounterReducer } from "./coutReducer";
import { CartReducer } from "./reducer";

const rootReducer = combineReducers({
  count: CounterReducer,
  cart: CartReducer,
});

export const store = createStore(rootReducer);
