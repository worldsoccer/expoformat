import { Machine } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: Machine[] = [];

const machineSlice = createSlice({
  name: "machines",
  initialState: initialState,
  reducers: {
    setMachine(state, action: PayloadAction<Machine[]>) {
      return action.payload; // 新しい状態に置き換える
    },
    addMachine(state, action: PayloadAction<Machine>) {
      state.push(action.payload);
    },
    updateMachine(state, action: PayloadAction<Machine>) {
      const index = state.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMachine(state, action: PayloadAction<number>) {
      state = state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { setMachine, addMachine, updateMachine, removeMachine } = machineSlice.actions;
export const selectMachine = (state: RootState) => state.machine;
export default machineSlice.reducer;
