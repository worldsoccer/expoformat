import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./src/slices/loginSlice";

import salesReducer from "@/slices/mysql/salesSlice";
import zNumberReducer from "@/slices/mysql/zNumberSlice";
import completedWorkReducer from "@/slices/mysql/completedWorkSlice";
import materialReducer from "@/slices/mysql/materialSlice";
import processManagementReducer from "@/slices/mysql/processManagementSlice";
import machineReducer from "@/slices/mysql/machineSlice";
import factoryReducer from "@/slices/mysql/factorySlice";
import lumberQualityReducer from "@/slices/mysql/lumberQualitySlice";
import materialSupplierReducer from "@/slices/mysql/materialSupplierSlice";
import processingReducer from "@/slices/mysql/processingSlice";
import salesCustomerReducer from "@/slices/mysql/salesCustomerSlice";
import employeeReducer from "@/slices/mysql/employeeSlice";
import materialManagementReducer from "@/slices/mysql/materialManagementSlice";
import materialCheckoutReducer from "@/slices/mysql/materialCheckoutManagementSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sales: salesReducer,
    zNumber: zNumberReducer,
    completedWork: completedWorkReducer,
    material: materialReducer,
    processManagement: processManagementReducer,
    machine: machineReducer,
    factory: factoryReducer,
    lumberQuality: lumberQualityReducer,
    materialSupplier: materialSupplierReducer,
    processing: processingReducer,
    salesCustomer: salesCustomerReducer,
    employee: employeeReducer,
    materialManagement: materialManagementReducer,
    materialCheckout: materialCheckoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
