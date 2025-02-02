
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cisecoApi = createApi({
  reducerPath: "cisecoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: ["User", "Product", "Brand", "Category", "Store"],
  endpoints: () => ({}),
});
