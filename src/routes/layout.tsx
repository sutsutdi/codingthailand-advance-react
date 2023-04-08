import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Content from "../pages/layout/Content";
import Leave from "../pages/leave";
import ManageLeave from "../pages/manage-leave";
import AuthGuard from "../guards/auth-guard";

const routeLayout: RouteObject[] = [
  {
    path: "/layout",
    element: < AuthGuard />,
    children: [
        { path: "", element: <Content/> },
        { path: "leave", element: <Leave/> },
        { path: "manageleave", element: <ManageLeave/> },
     
    ],
  },
];

export default routeLayout;
