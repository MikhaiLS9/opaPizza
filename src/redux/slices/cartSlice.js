import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizes: {},
  types: {},
  pizza: [],
  count: [],
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
    setIncreaseCount: (state, actions) => {
      const newPizza = actions.payload;
      const index = state.count.findIndex(
        (item) =>
          item.id === newPizza.id &&
          item.title === newPizza.title &&
          item.imageUrl === newPizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(newPizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(newPizza.types)
      );

      if (index !== -1) {
        state.count[index].count += 1;
      } else {
        state.count.push({ ...newPizza, count: 1 });
      }
    },
    setDecreaseCount: (state, action) => {
      const pizza = action.payload;
      const index = state.count.findIndex(
        (item) =>
          item.id === pizza.id &&
          item.title === pizza.title &&
          item.imageUrl === pizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(pizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(pizza.types)
      );

      if (index !== -1) {
        if (pizza.count > 1) state.count[index].count -= 1;
        else state.count.splice(index, 1);
      }
    },
    setClearCount: (state, action) => {
      const pizza = action.payload;
      const index = state.count.findIndex(
        (item) =>
          item.id === pizza.id &&
          item.title === pizza.title &&
          item.imageUrl === pizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(pizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(pizza.types)
      );

      if (index !== -1) {
        state.count.splice(index, 1);
      }
    },
  },
});

export const {
  setSelectSize,
  setSelectTypes,
  setAddPizzas,
  setIncreaseCount,
  setDecreaseCount,
  setClearCount,
} = cartSlice.actions;

export default cartSlice.reducer;
