import { MaterialSupplier } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: MaterialSupplier[] = [];

const materialSupplierSlice = createSlice({
  name: "materialSupplier",
  initialState,
  reducers: {
    setMaterialSupplier(state, action: PayloadAction<MaterialSupplier[]>) {
      return action.payload;
    },
    addMaterialSupplier(state, action: PayloadAction<MaterialSupplier>) {
      state.push(action.payload);
    },
    updateMaterialSupplier(state, action: PayloadAction<MaterialSupplier>) {
      const index = state.findIndex((ms) => ms.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMaterialSupplier(state, action: PayloadAction<number>) {
      return state.filter((ms) => ms.id !== action.payload);
    },
  },
});

export const {
  setMaterialSupplier,
  addMaterialSupplier,
  updateMaterialSupplier,
  removeMaterialSupplier,
} = materialSupplierSlice.actions;
export default materialSupplierSlice.reducer;
export const selectMaterialSupplier = (state: RootState) => state.materialSupplier;
