import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "../models/theme";
import { themes } from "../styles/themes";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "",
};

export const FormValue = createSlice({
  name: "formValue",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = FormValue.actions;

export default FormValue.reducer;
