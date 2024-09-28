import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter } = filtersSlice.actions;
// редюсер фильтру
export const filtersReducer = filtersSlice.reducer;
// функция-селектор
export const selectNameFilter = (state) => {
  return state.filters.name;
};

