import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizes: {},
  types: {},
  pizza: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectSize: (state, actions) => {
      state.sizes = actions.payload;
    },
    setSelectTypes: (state, actions) => {
      state.types = actions.payload;
    },

    setAddPizzas: (state, actions) => {
      state.pizza = [...state.pizza, actions.payload];
    },
  },
});

export const { setSelectSize, setSelectTypes, setAddPizzas, setAddCount } =
  cartSlice.actions;

export default cartSlice.reducer;
