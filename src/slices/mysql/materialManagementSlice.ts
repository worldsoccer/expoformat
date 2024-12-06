import { MaterialManagement } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: MaterialManagement[] = [];

const materialManagementSlice = createSlice({
  name: "materialManagement",
  initialState,
  reducers: {
    setMaterialManagement(state, action: PayloadAction<MaterialManagement[]>) {
      return action.payload;
    },
    addMaterialManagement(state, action: PayloadAction<MaterialManagement>) {
      state.push(action.payload);
    },
    updateMaterialManagement(state, action: PayloadAction<MaterialManagement>) {
      const index = state.findIndex((m) => m.材料管理ID === action.payload.材料管理ID);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMaterialManagement(state, action: PayloadAction<number>) {
      state = state.filter((m) => m.材料管理ID !== action.payload);
    },
  },
});

export const {
  setMaterialManagement,
  addMaterialManagement,
  updateMaterialManagement,
  removeMaterialManagement,
} = materialManagementSlice.actions;

export const selectMaterialManagement = (state: RootState) => state.materialManagement;
export default materialManagementSlice.reducer;
