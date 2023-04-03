import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home-page";
import RegisterPage from "../pages/register-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },  
  { path: "/login", element: <RegisterPage /> },
]);

export default router;
