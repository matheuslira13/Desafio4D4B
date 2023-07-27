import { UserInfo } from "../components/TextInput";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserStoreState = {
  user: UserInfo;
};
const initialState: UserStoreState = {
  user: {
    name: "",
    cpf: "",
    ierg: "",
    printAgency: "",
    telephone: "",
    cellphone: "",
    birth: "",
    country: "",
    state: "",
    cityBorn: "",
    maritalStatus: "",
    gender: "",
    balance: 0,
  },
};

export const balanceSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserStoreState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { updateUser } = balanceSlice.actions;
export const userActions = balanceSlice.reducer;
