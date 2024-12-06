import { Processing } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: Processing[] = [];

const processingSlice = createSlice({
  name: "processing",
  initialState,
  reducers: {
    setProcessing(state, action: PayloadAction<Processing[]>) {
      return action.payload;
    },
    addProcessing(state, action: PayloadAction<Processing>) {
      state.push(action.payload);
    },
    updateProcessing(state, action: PayloadAction<Processing>) {
      const index = state.findIndex((proc) => proc.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProcessing(state, action: PayloadAction<number>) {
      return state.filter((proc) => proc.id !== action.payload);
    },
  },
});

export const { setProcessing, addProcessing, updateProcessing, removeProcessing } =
  processingSlice.actions;
export default processingSlice.reducer;
export const selectProcessing = (state: RootState) => state.processing;
