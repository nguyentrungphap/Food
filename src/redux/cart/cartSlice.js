import { createSlice } from "@reduxjs/toolkit";
import { removeProductById } from "./service";

const initialState = {
  items: [

  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId } = action.payload;
      const cartItems = state.items;
      const productIndex = cartItems.findIndex(
        (cartItem) => cartItem.productId === productId
      );
      // có sẵn
      if (productIndex !== -1) {
        state.items = state.items.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        // chưa có
        state.items = [
          ...state.items,
          {
            productId,
            quantity: 1,
          },
        ];
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.items = removeProductById(state.items, productId);
    },
    incrementCount: (state, action) => {
      const { productId } = action.payload;
      const cartItems = state.items;
      const cartItem = cartItems.find((item) => item.productId === productId);
      if (cartItem) {
        cartItem.quantity += 1;
        state.items = cartItems;
      }
    },
    decrementCount: (state, action) => {
      const { productId } = action.payload;
      const cartItems = state.items;
      const cartItem = cartItems.find((item) => item.productId === productId);
      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.items = removeProductById(state.items, productId);
        } else {
          cartItem.quantity -= 1;
          state.items = cartItems;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decrementCount, incrementCount, } = cartSlice.actions;

export default cartSlice.reducer;
