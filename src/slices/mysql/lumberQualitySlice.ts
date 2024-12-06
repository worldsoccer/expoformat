import { LumberQuality } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: LumberQuality[] = [];

const lumberQualitySlice = createSlice({
  name: "lumberQuality",
  initialState,
  reducers: {
    setLumberQuality(state, action: PayloadAction<LumberQuality[]>) {
      return action.payload;
    },
    addLumberQuality(state, action: PayloadAction<LumberQuality>) {
      state.push(action.payload);
    },
    updateLumberQuality(state, action: PayloadAction<LumberQuality>) {
      const index = state.findIndex((lq) => lq.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeLumberQuality(state, action: PayloadAction<number>) {
      return state.filter((lq) => lq.id !== action.payload);
    },
  },
});

export const { setLumberQuality, addLumberQuality, updateLumberQuality, removeLumberQuality } =
  lumberQualitySlice.actions;
export default lumberQualitySlice.reducer;
export const selectLumberQuality = (state: RootState) => state.lumberQuality;
