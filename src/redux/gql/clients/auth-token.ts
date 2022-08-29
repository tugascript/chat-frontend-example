let authToken = "";

export const setAuthToken = (token: string): void => {
  authToken = token;
};

export const getAuthToken = (): string => authToken;
