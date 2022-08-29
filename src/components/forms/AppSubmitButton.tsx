import type { GridSize } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";

interface IProps {
  text: string | React.ReactNode;
  loading: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant?: "text" | "outlined" | "contained";
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  size?: "small" | "medium" | "large";
}

const StyledBtn = styled(Button)(({ theme, variant }) => ({
  color:
    variant === "contained"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  fontWeight: variant === "contained" ? 400 : 600,
  borderWidth: 2,
  "&:disabled": {
    color: "#fff",
    backgroundColor: theme.palette.primary.light,
  },
  "&:hover": {
    borderWidth: 2,
  },
}));

const AppSubmitButton: React.FC<IProps> = ({
  text,
  variant = "contained",
  color = "secondary",
  size = "large",
  loading,
  ...rest
}) => (
  <Grid item {...rest}>
    <StyledBtn
      fullWidth
      disableElevation
      disabled={loading}
      variant={variant}
      color={color}
      size={size}
      type="submit"
    >
      {text}
    </StyledBtn>
  </Grid>
);

export type { IProps as IAppSubmitButtonProps };
export default AppSubmitButton;
