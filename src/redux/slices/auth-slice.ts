import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { accountsApiEndpoints } from "../apis/accounts-api";
import { authEndpoints } from "../apis/auth-api";
import { Me_me } from "../gql/__generated__/Me";
import { RootState } from "../store";

export interface IAuthState {
  user: Me_me | null;
  authenticated: boolean;
}

const initialState: IAuthState = { user: null, authenticated: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authEndpoints.login.matchFulfilled, (state, { payload }) => {
        if ("accessToken" in payload) {
          if (!state.authenticated) {
            state.authenticated = true;
            return state;
          }
        }
      })
      .addMatcher(
        isAnyOf(
          authEndpoints.confirmLogin.matchFulfilled,
          authEndpoints.confirmEmail.matchFulfilled,
          authEndpoints.refreshAccess.matchFulfilled
        ),
        (state) => {
          if (!state.authenticated) {
            state.authenticated = true;
          }
        }
      )
      .addMatcher(authEndpoints.logout.matchFulfilled, (state) => {
        state.authenticated = false;
        state.user = null;
      })
      .addMatcher(
        accountsApiEndpoints.me.matchFulfilled,
        (state, { payload }) => {
          if (state.authenticated) {
            state.user = payload;
          }
        }
      );
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export default authSlice.reducer;
