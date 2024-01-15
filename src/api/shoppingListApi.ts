// src/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Category {
  id: number;
  name: string;
}
interface Product {
  name: string;
  categoryId: number;
}
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
    }),
    addProduct: builder.mutation<void, Product>({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useAddProductMutation } = api;
