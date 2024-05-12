import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartAdminSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartAdmin: (state, action) => {
      const cart = action.payload;
      state.items = cart;
    },
  },
});

export const { setCartAdmin } = cartAdminSlice.actions;

export default cartAdminSlice.reducer;
