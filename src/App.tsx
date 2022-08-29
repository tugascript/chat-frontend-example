import React from "react";
import Router from "./pages/Router";
import { useLazyMeQuery } from "./redux/apis/accounts-api";
import { useRefreshAccessMutation } from "./redux/apis/auth-api";
import { useAppSelector } from "./redux/hooks";
import { selectAuth } from "./redux/slices/auth-slice";

let interval: NodeJS.Timer | null = null;

const App: React.FC = () => {
  const [refresh, { isError, isSuccess, isLoading }] =
    useRefreshAccessMutation();
  const [me] = useLazyMeQuery();
  const auth = useAppSelector(selectAuth);

  React.useEffect(() => {
    if (!isLoading) {
      if (!auth.authenticated && !isError) {
        refresh();
      }

      if (auth.authenticated) {
        if (auth.user) {
          if (!interval) {
            interval = setInterval(() => {
              refresh();
            }, Math.floor(1000 * 60 * 9.75));
          } else if (isError) {
            clearInterval(interval);
            interval = null;
          }
        } else {
          me();
        }
      }
    }
  }, [isLoading, isError, isSuccess, auth, refresh, me]);

  return <Router />;
};

export default App;
