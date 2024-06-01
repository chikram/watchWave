import { configureStore } from "@reduxjs/toolkit";
import watchReducer from "./WatchSlice";
import favouriteReducer from "./FavouriteItemSlice";

export const store = configureStore({
  reducer: {
    watches: watchReducer,
    favouriteItems: favouriteReducer,
  },
});
