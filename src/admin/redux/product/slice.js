import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      state.items = products;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
