import { GoogleAccount, UserData } from "@/@types/custom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AutoLogin = {
  autoLogin: boolean;
};

type StateType = {
  user: UserData | null;
  auth: {
    google: GoogleAccount | null;
  } | null;
  login: boolean;
  autoLogin: boolean;
} & AutoLogin;

const initialState: StateType = {
  user: null,
  auth: null,
  login: false,
  autoLogin: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    preLogin: (state: StateType, action: PayloadAction<GoogleAccount & AutoLogin>) => {
      state.auth = { google: action.payload };
      state.autoLogin = action.payload.autoLogin;
    },
    login: (state: StateType, action: PayloadAction<UserData & AutoLogin>) => {
      state.user = action.payload;
      state.login = true;
      state.autoLogin = action.payload.autoLogin;
    },
    logout: (state: StateType) => {
      state.user = null;
      state.login = false;
    }
  }
});

export const { ...actions } = userSlice.actions;

export default userSlice.reducer;
