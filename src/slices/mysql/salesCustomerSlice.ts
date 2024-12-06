import { SalesCustomer } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: SalesCustomer[] = [];

const salesCustomerSlice = createSlice({
  name: "salesCustomer",
  initialState,
  reducers: {
    setSalesCustomer(state, action: PayloadAction<SalesCustomer[]>) {
      return action.payload;
    },
    addSalesCustomer(state, action: PayloadAction<SalesCustomer>) {
      state.push(action.payload);
    },
    updateSalesCustomer(state, action: PayloadAction<SalesCustomer>) {
      const index = state.findIndex((sc) => sc.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeSalesCustomer(state, action: PayloadAction<number>) {
      return state.filter((sc) => sc.id !== action.payload);
    },
  },
});

export const { setSalesCustomer, addSalesCustomer, updateSalesCustomer, removeSalesCustomer } =
  salesCustomerSlice.actions;
export default salesCustomerSlice.reducer;
export const selectSalesCustomer = (state: RootState) => state.salesCustomer;
