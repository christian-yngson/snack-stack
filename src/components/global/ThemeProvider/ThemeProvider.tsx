import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import { type ReactNode } from "react";
import theme from "./theme";

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: Props) {
  return (
    <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
  );
}

export default ThemeProvider;
