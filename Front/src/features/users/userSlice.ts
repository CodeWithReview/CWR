import { UserData } from "@/@types/custom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  user: UserData | null;
};

const initialState: StateType = {
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    logout: (state: StateType, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
