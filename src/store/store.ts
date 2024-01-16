import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./slices/shoppingListSlice";
import { api } from "../api/ShoppingListApi";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    shoppingList: shoppingListReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
