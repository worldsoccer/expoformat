import { Factory } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: Factory[] = [];

const factorySlice = createSlice({
  name: "factories",
  initialState: initialState,
  reducers: {
    setFactories(state, action: PayloadAction<Factory[]>) {
      return action.payload;
    },
    addFactory(state, action: PayloadAction<Factory>) {
      state.push(action.payload);
    },
    updateFactory(state, action: PayloadAction<Factory>) {
      const index = state.findIndex((f) => f.工場番号 === action.payload.工場番号);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeFactory(state, action: PayloadAction<number>) {
      return state.filter((f) => f.工場番号 !== action.payload);
    },
  },
});

export const { setFactories, addFactory, updateFactory, removeFactory } = factorySlice.actions;
export const selectFactory = (state: RootState) => state.factory;
export default factorySlice.reducer;
