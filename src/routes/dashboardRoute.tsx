import { RouteObject, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/d-layout";
import DHome from "../pages/dashboard/d-home";

const routeDashboard: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // { path: "/", element: <DHome /> },
      { path: "", element: <DHome /> },
    ],
  },
];

export default routeDashboard;
