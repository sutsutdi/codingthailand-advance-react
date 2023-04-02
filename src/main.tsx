
import ReactDOM from 'react-dom/client'
import {
   RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';

import router from './routes/root';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline />
     <RouterProvider router={router}/>
     <Toaster position='bottom-right' />
  </ThemeProvider>
  // </React.StrictMode>,
)
