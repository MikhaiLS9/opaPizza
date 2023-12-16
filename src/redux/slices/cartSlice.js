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
      // console.log(state.sizes);
    },
    setSelectTypes: (state, actions) => {
      state.types = actions.payload;
      // console.log(state.types);
    },
    setAddPizzas: (state, actions) => {
      state.pizza = [...state.pizza, actions.payload];
      console.log(state.pizza);
    },
  },
});

export const { setSelectSize, setSelectTypes, setAddPizzas } =
  cartSlice.actions;

export default cartSlice.reducer;
