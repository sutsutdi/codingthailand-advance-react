import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#235574",
    },
    secondary: {
      main: "#0072E3",
    },
    success: {
      main: "#2D7A31",
    },
    info: {
      main: "#0288D1",
    },
    warning: {
      main: "#ED6C02",
    },
    error: {
      main: "#FD444E",
    },
  },
  typography: {
    fontFamily: ["prompt", "IBM Plex Sans Thai", "poppins"].join(","),

    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "bold",
    },
  },
});

export default theme;
