import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IAlert {
  severity: "success" | "error" | "warning" | "info";
  message: string;
}

export interface IAlertState {
  severity: "success" | "error" | "warning" | "info";
  message: string;
  open: boolean;
}

const initialState: IAlertState = {
  severity: "success",
  message: "",
  open: false,
};

export const dismissAlert = createAsyncThunk("alert/dismissAlert", async () => {
  return;
});

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<IAlert>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(dismissAlert.fulfilled, (state) => {
      state.open = false;
      state.message = "";
    });
  },
});

export const selectAlert = (state: RootState): IAlertState => state.alert;
export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
