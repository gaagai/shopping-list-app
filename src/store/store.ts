import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./slices/shoppingListSlice";
import categoriesReducer from "./slices/categoriesSlice";
import { api } from "../api/ShoppingListApi";
import { formApi } from "../api/ContactFormApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [formApi.reducerPath]: formApi.reducer, // Use formApi.reducerPath here
    shoppingList: shoppingListReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, formApi.middleware), // Include both API middlewares
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
