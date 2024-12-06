import { ProcessDetail, ProcessManagement } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: ProcessManagement[] = [];

const processManagementSlice = createSlice({
  name: "processManagement",
  initialState: initialState,
  reducers: {
    setProcessManagements(state, action: PayloadAction<ProcessManagement[]>) {
      return action.payload;
    },
    addProcessManagements(state, action: PayloadAction<ProcessManagement>) {
      state.push(action.payload);
    },
    updateProcessManagement(state, action: PayloadAction<ProcessManagement>) {
      const index = state.findIndex((item) => item.管理ID === action.payload.管理ID);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProcessManagement(state, action: PayloadAction<number>) {
      return state.filter((item) => item.管理ID !== action.payload);
    },
  },
});

export const {
  setProcessManagements,
  addProcessManagements,
  updateProcessManagement,
  removeProcessManagement,
} = processManagementSlice.actions;

export const selectProcessManagement = (state: RootState) => state.processManagement;

export default processManagementSlice.reducer;
