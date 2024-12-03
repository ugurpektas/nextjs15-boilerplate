import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Örnek bir slice (counter)
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Tipleri tanımla
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// React Hook'larını özelleştir
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
