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
      main: "#13BF00",
    },
    info: {
      main: "#800080",
    },
    warning: {
      main: "#F4D540",
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
