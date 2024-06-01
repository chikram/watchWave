import { createSlice } from "@reduxjs/toolkit";
import watches from "../data/watches";

const initialState = {
  watches: watches,
  selectedWatch: null,
};

export const WatchSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      state.selectedWatch = state.watches.find(
        (watch) => watch.id === action.payload
      );
    },
  },
});

export const { selectedItem } = WatchSlice.actions;
export default WatchSlice.reducer;
