import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAuthenticated } from "../../redux/slices/auth-slice";
import type { IRouteProps } from "./props-interface";

const ProtectedRoute: React.FC<IRouteProps> = ({ children }) => {
  const authenticated = useAppSelector(selectAuthenticated);

  if (!authenticated) {
    return <Navigate replace to="/" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
