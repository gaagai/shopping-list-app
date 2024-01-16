import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FormData {
  name: string;
  address: string;
  email: string;
  shoppingItems: any[];
}

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_DOTNET_API_URL }),
  endpoints: (builder) => ({
    submitForm: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: "orders",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = formApi;
