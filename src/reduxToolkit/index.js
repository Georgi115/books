import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice";

const rootReducer = combineReducers({
  booksSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
