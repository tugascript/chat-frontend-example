import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const ThemeType: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#333333",
          },
          secondary: {
            main: "#679E63",
          },
          background: {
            default: "#85B182",
            paper: "#333333",
          },
          divider: grey[400],
        },
        typography: {
          fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
      })}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeType;
