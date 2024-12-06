import { completedWorkData } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: completedWorkData[] = [];

const completedWorkDataSlice = createSlice({
  name: "completedWorkData",
  initialState: initialState,
  reducers: {
    setCompletedWorkData(state, action: PayloadAction<completedWorkData[]>) {
      return action.payload;
    },
    addCompletedWorkData(state, action: PayloadAction<completedWorkData>) {
      state.push(action.payload);
    },
    updateCompletedWorkData(state, action: PayloadAction<completedWorkData>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeCompletedWorkData(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setCompletedWorkData,
  addCompletedWorkData,
  updateCompletedWorkData,
  removeCompletedWorkData,
} = completedWorkDataSlice.actions;

export const selectCompletedWork = (state: RootState) => state.completedWork;
export default completedWorkDataSlice.reducer;
