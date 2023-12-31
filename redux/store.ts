import { configureStore } from "@reduxjs/toolkit";
import { chartSlice } from "./slice/chartSlice";

export const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
