import { configureStore } from "@reduxjs/toolkit";
import { accountsApi } from "./apis/accounts-api";
import { authApi } from "./apis/auth-api";
import { chatsApi } from "./apis/chats-api";
import { invitesApi } from "./apis/invites-api";
import { messagesApi } from "./apis/messages-api";
import { profilesApi } from "./apis/profiles-api";
import authReducer from "./slices/auth-slice";
import alertReducer from "./slices/alert-slice";

export const store = configureStore({
  reducer: {
    [accountsApi.reducerPath]: accountsApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [profilesApi.reducerPath]: profilesApi.reducer,
    [invitesApi.reducerPath]: invitesApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountsApi.middleware,
      chatsApi.middleware,
      profilesApi.middleware,
      invitesApi.middleware,
      messagesApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
