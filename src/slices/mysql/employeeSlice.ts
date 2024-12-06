import { Employee } from "@/types/mysql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: Employee[] = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      return action.payload;
    },
    addEmployee(state, action: PayloadAction<Employee>) {
      state.push(action.payload);
    },
    updateEmployee(state, action: PayloadAction<Employee>) {
      const index = state.findIndex((e) => e.従業員番号 === action.payload.従業員番号);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeEmployee(state, action: PayloadAction<string>) {
      state = state.filter((e) => e.従業員番号 !== action.payload);
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, removeEmployee } =
  employeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employee;
export default employeeSlice.reducer;
