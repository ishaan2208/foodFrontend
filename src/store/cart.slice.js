import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity += 1;

          return;
        }
      }
      state.items.push(action.payload);
      state.cartItems.push(action.payload.name);
    },
    removeItem: (state, action) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          state.items[i].quantity -= 1;
          if (state.items[i].quantity === 0) {
            state.cartItems = state.cartItems.filter(
              (item) => item !== state.items[i].name
            );
            state.items.splice(i, 1);
          }
          return;
        }
      }
    },
    emptyCart: (state) => {
      state.items = [];
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
