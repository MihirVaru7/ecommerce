

import { configureStore } from "@reduxjs/toolkit";
import { cisecoApi } from "../services/ciseco";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "@/features/auth/authSlice";
import productFilterSlice from "@/features/productFilter/productFilterSlice";

export const store = configureStore({
  reducer: {
    [cisecoApi.reducerPath]: cisecoApi.reducer,
    auth: authSlice,
    productFilter: productFilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cisecoApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
