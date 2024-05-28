import { configureStore } from "@reduxjs/toolkit";
import { WatchSlice } from "./WatchSlice";

export const store = configureStore({
  reducer: {
    watches: WatchSlice.reducer,
  },
});
