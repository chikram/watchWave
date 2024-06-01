import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const FavouriteItemSlice = createSlice({
  name: "favouriteItems",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = FavouriteItemSlice.actions;
export default FavouriteItemSlice.reducer;
