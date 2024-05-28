import { createSlice } from "@reduxjs/toolkit";
import watches from "../data/watches";

const initialState = {
  watches: watches,
  selectedItem: null,
};

export const WatchSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      const watchId = action.payload;
      state.selectedItem = state.watches.find((w) => w.id === watchId);
    },
  },
});
