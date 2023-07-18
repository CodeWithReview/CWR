import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersReducer } from "@/features/users";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      usersReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV === "development"
  });

  return store;
};

const store = makeStore();

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
