import { combineReducers, createStore } from "redux";
import cartAdminReducer from "./cartAdmin/cartAdminSlice";

const rootReducer = combineReducers({
  cartItems: cartAdminReducer,
});

export const store = createStore(rootReducer);
