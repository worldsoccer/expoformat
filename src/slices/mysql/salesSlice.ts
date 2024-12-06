import { SalesData } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: SalesData[] = [];

const salesDataSlice = createSlice({
  name: "salesData",
  initialState: initialState,
  reducers: {
    setSalesData(state, action: PayloadAction<SalesData[]>) {
      return action.payload;
    },
    addSalesData(state, action: PayloadAction<SalesData>) {
      state.push(action.payload);
    },
    updateSalesData(state, action: PayloadAction<SalesData>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeSalesData(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setSalesData, addSalesData, updateSalesData, removeSalesData } =
  salesDataSlice.actions;
export const selectSales = (state: RootState) => state.sales;
export default salesDataSlice.reducer;
