import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import AppAlert from "./AppAlert";
import Navbar from "./Navbar";
import { IRouteProps } from "./routes/props-interface";

const Base: React.FC<IRouteProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Toolbar />
      <AppAlert />
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        sx={{
          minHeight: "70vh",
        }}
      >
        <Grid item xl={7} lg={8} md={9} sm={10} xs={11}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Base;
