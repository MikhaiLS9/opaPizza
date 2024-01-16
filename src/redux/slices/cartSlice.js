import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: [],
};

const korzinaSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIncreasePizza: (state, actions) => {
      const newPizza = actions.payload;
      const index = state.pizza.findIndex(
        (item) =>
          item.id === newPizza.id &&
          item.title === newPizza.title &&
          item.imageUrl === newPizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(newPizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(newPizza.types)
      );

      if (index !== -1) {
        state.pizza[index].count += 1;
      } else {
        state.pizza.push({ ...newPizza, count: 1 });
      }
    },
    setDecreasePizza: (state, actions) => {
      const newPizza = actions.payload;
      const index = state.pizza.findIndex(
        (item) =>
          item.id === newPizza.id &&
          item.title === newPizza.title &&
          item.imageUrl === newPizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(newPizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(newPizza.types)
      );
      if (index !== -1) {
        if (state.pizza[index].count > 1) state.pizza[index].count -= 1;
        else state.pizza.splice(index, 1);
      }
    },

    setClearItemPizza: (state, actions) => {
      const newPizza = actions.payload;
      const index = state.pizza.findIndex(
        (item) =>
          item.id === newPizza.id &&
          item.title === newPizza.title &&
          item.imageUrl === newPizza.imageUrl &&
          JSON.stringify(item.sizes) === JSON.stringify(newPizza.sizes) &&
          JSON.stringify(item.types) === JSON.stringify(newPizza.types)
      );
      if (index !== -1) state.pizza.splice(index, 1);
    },

    setClearCart: (state) => {
      state.pizza = [];
    },
  },
});

export const {
  setIncreasePizza,
  setDecreasePizza,
  setClearItemPizza,
  setClearCart,
} = korzinaSlise.actions;

export default korzinaSlise.reducer;
