import { createSlice } from "@reduxjs/toolkit";
import Product from "@/models/Product";
import HawaiianPizzaImage from "@/assets/images/food/pizza/hawaiian-pizza.avif";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FoodPreviewState {
  food: Product | null;
  isOpen: boolean;
}

const initialState: FoodPreviewState = {
  food: {
    id: 1,
    name: "Hawaiian Pizza",
    description:
      "A classic combination of savory ham and sweet pineapple layered over rich tomato sauce. Melted mozzarella brings everything together with a perfect balance of salty and sweet.",
    price: 12,
    image: HawaiianPizzaImage,
  },
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
      state.food = null;
      state.isOpen = false;
    },
  },
});

export const { previewFood, closePreview } = foodPreviewSlice.actions;

export default foodPreviewSlice.reducer;
