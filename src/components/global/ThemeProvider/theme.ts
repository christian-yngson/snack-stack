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
  typography: {
    h1: {
      fontSize: "6rem",
      lineHeight: 1.1,
      "@media (max-width: 700px)": {
        fontSize: "2rem",
      },
      "@media (max-width: 1200px)": {
        fontSize: "3.2rem",
      },
    },
    h4: {
      fontSize: "2rem",
      "@media (max-width: 700px)": {
        fontSize: "1rem",
      },
      "@media (max-width: 1200px)": {
        fontSize: "1.2rem",
      },
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
    MuiTypography: {
      variants: [
        {
          props: { variant: "hero" },
          style: {
            fontSize: "4rem",
            lineHeight: 1.1,
            "@media (max-width: 1200px)": {
              fontSize: "3.2rem",
            },
            "@media (max-width: 700px)": {
              fontSize: "2rem",
            },
          },
        },
      ],
    },
  },
});

export default theme;
