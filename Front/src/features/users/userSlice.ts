import { GoogleAccount, UserData } from "@/@types/custom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  user: UserData | null;
  auth: {
    google: GoogleAccount | null;
  } | null;
  login: boolean;
};

const initialState: StateType = {
  user: null,
  auth: null,
  login: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    preLogin: (state: StateType, action: PayloadAction<GoogleAccount>) => {
      state.auth = { google: action.payload };
    },
    login: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.login = true;
    },
    logout: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.login = false;
    }
  }
});

export const { ...actions } = userSlice.actions;

export default userSlice.reducer;
