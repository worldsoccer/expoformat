import { MaterialCheckoutManagement } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: MaterialCheckoutManagement[] = [];

const materialCheckoutManagementSlice = createSlice({
  name: "materialCheckoutManagement",
  initialState,
  reducers: {
    setMaterialCheckout(state, action: PayloadAction<MaterialCheckoutManagement[]>) {
      return action.payload;
    },
    addMaterialCheckout(state, action: PayloadAction<MaterialCheckoutManagement>) {
      state.push(action.payload);
    },
    updateMaterialCheckout(state, action: PayloadAction<MaterialCheckoutManagement>) {
      const index = state.findIndex((c) => c.持出番号 === action.payload.持出番号);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMaterialCheckout(state, action: PayloadAction<number>) {
      state = state.filter((c) => c.持出番号 !== action.payload);
    },
  },
});

export const {
  setMaterialCheckout,
  addMaterialCheckout,
  updateMaterialCheckout,
  removeMaterialCheckout,
} = materialCheckoutManagementSlice.actions;

export const selectMaterialCheckoutManagement = (state: RootState) => state.materialCheckout;
export default materialCheckoutManagementSlice.reducer;
