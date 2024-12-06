import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AuthState } from "@/types/user";

const initialState: AuthState = {
  isLoanching: true,
  isLoading: false,
  error: null,
  token: null,
  従業員番号: null,
  従業員名: null,
  パスワード: null,
  アドレス: null,
  課名: null,
  課名2: null,
  工程管理: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; user: AuthState }>) => {
      // console.log("C:", action.payload);
      state.isLoanching = false;
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.token;
      state.従業員番号 = action.payload.user.従業員番号;
      state.従業員名 = action.payload.user.従業員名;
      state.パスワード = action.payload.user.パスワード;
      state.アドレス = action.payload.user.アドレス;
      state.課名 = action.payload.user.課名;
      state.課名2 = action.payload.user.課名2;
      state.工程管理 = action.payload.user.工程管理;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoanching = false;
      state.isLoading = false;
      state.error = action.payload;
      state.token = null;
    },
    logout: (state) => {
      state.isLoading = false;
      state.error = null;
      state.token = null;
      state.従業員番号 = null;
      state.従業員名 = null;
      state.パスワード = null;
      state.アドレス = null;
      state.課名 = null;
      state.課名2 = null;
      state.工程管理 = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
