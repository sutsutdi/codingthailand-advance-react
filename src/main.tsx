import ReactDOM from "react-dom/client";
import { store } from "./reux-toolkit/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { Toaster } from "react-hot-toast";
import theme from "./theme";


import router from "./routes/root";

import "@fontsource/prompt";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ThemeProvider>
  </Provider>

  // </React.StrictMode>,
);
