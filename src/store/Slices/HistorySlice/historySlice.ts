import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IHistorySlice {
  id: string;
  date: string;
  time: string;
  input: string;
  result: string;
}

const initialState: IHistorySlice[] = [];

interface IPayload {
  input: string;
  result: string;
}

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<IPayload>) => {
      state.push({
        id: Date.now() + "",
        date: new Date().toISOString().split("T")[0],
        time: new Date().toISOString().split("T")[1].split(".")[0],
        input: action.payload.input,
        result: action.payload.result,
      });
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
