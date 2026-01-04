import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Order = {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export interface CartState {
  value: Order[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Order>) => {
      state.value.push(action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<Order["id"]>) => {
      const order = state.value.find((order) => order.id === action.payload);
      if (order) {
        order.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Order["id"]>) => {
      const order = state.value.find((order) => order.id === action.payload);
      if (order && order.quantity > 1) {
        order.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<Order["id"]>) => {
      state.value = state.value.filter((order) => order.id !== action.payload);
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
