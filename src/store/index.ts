import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
