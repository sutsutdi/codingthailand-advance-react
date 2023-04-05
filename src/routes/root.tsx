import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import RegisterPage from "../pages/register-page";
import ToastTest from "../pages/toast-test";
import LoginPage from "../pages/login-page";
import routeDashboard from "./dashboardRoute";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/toast", element: <ToastTest /> },
  ...routeDashboard,
]);

export default router;
