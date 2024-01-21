import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products";
import { configureStore } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "spend",
  initialState: {
    value: 5000000,
    items: data.map((item) => ({ ...item, count: parseInt(item.count, 10) })),
  },
  reducers: {
    incrementInputValue: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        item.count += 1;
        state.value -= item.productPrice;
      }
    },
    decrementInputValue: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item && item.count > 0) {
        item.count -= 1;
        state.value += item.productPrice;
      }
    },
  },
});

export const { incrementInputValue, decrementInputValue } =
  productSlice.actions;

export const productReducer = productSlice.reducer;

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
