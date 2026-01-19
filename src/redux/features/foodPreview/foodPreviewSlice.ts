import { createSlice } from "@reduxjs/toolkit";
import Product from "@/models/Product";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FoodPreviewState {
  food: Product | null;
  isOpen: boolean;
}

const initialState: FoodPreviewState = {
  food: null,
  isOpen: false,
};

export const foodPreviewSlice = createSlice({
  name: "foodPreview",
  initialState,
  reducers: {
    previewFood: (state, action: PayloadAction<Product>) => {
      state.food = action.payload;
      state.isOpen = true;
    },
    closePreview: (state) => {
      state.isOpen = false;
    },
  },
});

export const { previewFood, closePreview } = foodPreviewSlice.actions;

export default foodPreviewSlice.reducer;
