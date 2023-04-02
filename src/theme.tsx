import { createTheme } from "@mui/material/styles";



// A custom theme for this app
const theme = createTheme({
  
  palette: {
    mode: "light",
    primary: {
      main: "#235574",
      dark: "#17394F",
      light: "#57B1C1"
    },
    secondary: {
      main: "#7C4C66",
      light: "#CD97F9",
      dark: "#523244"
    },
    success: {
      main: "#4F6F05",
      light: "#03C268",
      dark: "#02753F"
    },
    info: {
      main: "#9E8D83",
      light: "#BEB4AD",
      dark: "#574B44"
    },
    warning: {
      main: "#FD8E7B",
      light: "#FEB8AB",
      dark: "#FB5322"
    },
    error: {
      main: "#FD444E",
      light: "#FE7E85",
      dark: "#DE030E",
     
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
      fontStyle: 'bold',
    },
  },
});

export default theme;
