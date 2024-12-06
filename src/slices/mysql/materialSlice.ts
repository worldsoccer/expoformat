import { materialData } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: materialData[] = [];

const materialDataSlice = createSlice({
  name: "materialData",
  initialState: initialState,
  reducers: {
    setMaterialData(state, action: PayloadAction<materialData[]>) {
      return action.payload;
    },
    addMaterialData(state, action: PayloadAction<materialData>) {
      state.push(action.payload);
    },
    updateMaterialData(state, action: PayloadAction<materialData>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMaterialData(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setMaterialData, addMaterialData, updateMaterialData, removeMaterialData } =
  materialDataSlice.actions;

export const selectMaterial = (state: RootState) => state.material;
export default materialDataSlice.reducer;
