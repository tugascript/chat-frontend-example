import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import type { IAuthResult } from "./interfaces/auth-result-interface";
import type { ILogin } from "./interfaces/login-interface";
import type { IMessage } from "./interfaces/message-interface";
import type { IRegister } from "./interfaces/register-interface";
import type { IConfirmLogin } from "./interfaces/confirm-login-interface";
import {
  getAuthToken,
  setAuthToken,
  setClientAuthorization,
} from "../gql/clients";
import { IResetPassword } from "./interfaces/reset-password";

const setAuthResponse = (response: IAuthResult) => {
  setAuthToken(response.accessToken);
  setClientAuthorization(response.accessToken);
  return response;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth/" }),
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResult | IMessage, ILogin>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: IAuthResult | IMessage) => {
        if ("accessToken" in response) {
          setAuthToken(response.accessToken);
          setClientAuthorization(response.accessToken);
        }

        return response;
      },
    }),
    confirmLogin: builder.mutation<IAuthResult, IConfirmLogin>({
      query: (body) => ({
        url: "/confirm-login",
        method: "POST",
        body,
      }),
      transformResponse: (response: IAuthResult) => {
        setAuthToken(response.accessToken);
        setClientAuthorization(response.accessToken);
        return response;
      },
    }),
    register: builder.mutation<IMessage, IRegister>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    confirmEmail: builder.mutation<IAuthResult, string>({
      query: (confirmationToken) => ({
        url: "/confirm-email",
        method: "POST",
        body: { confirmationToken },
      }),
      transformResponse: setAuthResponse,
    }),
    logout: builder.mutation<IMessage, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),
    refreshAccess: builder.mutation<IAuthResult, void>({
      query: () => ({
        url: "/refresh-access",
        method: "POST",
      }),
      transformResponse: setAuthResponse,
    }),
    resetEmail: builder.mutation<IMessage, string>({
      query: (email) => ({
        url: "/reset-password-email",
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation<IMessage, IResetPassword>({
      query: (body) => ({
        url: "/reset-password",
        method: "POST",
        body,
      }),
    }),
    toogleTwoFactor: builder.mutation<IMessage, void>({
      query: () => ({
        url: "/toggle-two-factor",
        method: "POST",
      }),
    }),
    updateEmail: builder.mutation<IAuthResult, ILogin>({
      query: (body) => ({
        url: "/update-email",
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
      transformResponse: setAuthResponse,
    }),
    updatePassword: builder.mutation<IAuthResult, ILogin>({
      query: (body) => ({
        url: "/update-password",
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
      transformResponse: setAuthResponse,
    }),
  }),
});

export const authEndpoints = authApi.endpoints;
export const {
  useLoginMutation,
  useConfirmLoginMutation,
  useRegisterMutation,
  useConfirmEmailMutation,
  useLogoutMutation,
  useRefreshAccessMutation,
  useResetEmailMutation,
  useResetPasswordMutation,
  useToogleTwoFactorMutation,
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
} = authApi;
