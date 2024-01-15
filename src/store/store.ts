import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./slices/shoppingListSlice";
import { api } from "../api/ShoppingListApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    shoppingList: shoppingListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
