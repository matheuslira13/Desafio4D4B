import { configureStore } from "@reduxjs/toolkit";
import { userActions } from "./userStore";

export const store = configureStore({
  reducer: userActions,
});
