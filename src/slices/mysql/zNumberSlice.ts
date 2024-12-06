import { zNumberData } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: zNumberData[] = [];

const zNumberDataSlice = createSlice({
  name: "zNumberData",
  initialState: initialState,
  reducers: {
    setZNumberData(state, action: PayloadAction<zNumberData[]>) {
      return action.payload;
    },
    addZNumberData(state, action: PayloadAction<zNumberData>) {
      state.push(action.payload);
    },
    updateZNumberData(state, action: PayloadAction<zNumberData>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeZNumberData(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setZNumberData, addZNumberData, updateZNumberData, removeZNumberData } =
  zNumberDataSlice.actions;

export const selectZNumber = (state: RootState) => state.zNumber;
export default zNumberDataSlice.reducer;
