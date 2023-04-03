import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import RegisterPage from "../pages/register-page";
import ToastTest from "../pages/toast-test";
import LoginPage from "../pages/login-page";
import Dashboard from "../pages/dashboard/d-layout";
import { Children } from "react";
import DHome from "../pages/dashboard/d-home";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // { path: "/", element: <DHome /> },
      { path: "", element: <DHome /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/toast", element: <ToastTest /> },
]);

export default router;
