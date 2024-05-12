import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const categories = action.payload;
      state.items = categories;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
