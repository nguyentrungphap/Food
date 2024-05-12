import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogins: (state, action) => {
      const categories = action.payload;
      state.items = categories;
    },
  },
});

export const { setLogins } = loginSlice.actions;

export default loginSlice.reducer;
