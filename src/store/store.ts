import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./Slices/CalculatorSlice/calculatorSlice";
import historyReducer from "./Slices/HistorySlice/historySlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
