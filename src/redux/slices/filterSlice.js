import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: "Все",
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, actions) => {
      state.categoryId = actions.payload;
    },
    SetSortPopupCategory: (state, action) => {
      state.sort.name = action.payload;
    },

    SetSortProperty: (state, action) => {
      state.sort.sortProperty = action.payload;
    },
  },
});

export const { setCategoryId, SetSortPopupCategory, SetSortProperty } = filterSlice.actions;

export default filterSlice.reducer;
