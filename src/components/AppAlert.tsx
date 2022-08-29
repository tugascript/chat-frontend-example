import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { dismissAlert, selectAlert } from "../redux/slices/alert-slice";

const AppAlert: React.FC = () => {
  const alert = useAppSelector(selectAlert);
  const dispatch = useAppDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(dismissAlert());
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3500}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={alert.severity}
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AppAlert;
