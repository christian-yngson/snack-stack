import { createTheme } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
      contrastText: "#fff",
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          "&:focus": {
            outline: `4px auto ${orange[500]} !important`,
          },
          "&.Mui-focusVisible": {
            outline: `2px solid ${orange[700]} !important`,
            outlineOffset: "2px",
          },
          WebkitTapHighlightColor: "transparent",
          "& .MuiTouchRipple-root": {
            color: `${orange[500]} !important`,
          },
        },
      },
    },
  },
});

export default theme;
