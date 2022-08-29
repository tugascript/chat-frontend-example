import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HomeButton: React.FC = () => {
  return (
    <Button
      sx={{ textDecoration: "none" }}
      size="large"
      variant="contained"
      color="secondary"
      disableElevation
      component={Link}
      to="/"
    >
      Home
    </Button>
  );
};

export default HomeButton;
