import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Content from "../pages/layout/Content";
import Leave from "../pages/leave";
import ManageLeave from "../pages/manage-leave";

const routeLayout: RouteObject[] = [
  {
    path: "/layout",
    element: <Layout />,
    children: [
        { path: "", element: <Content/> },
        { path: "leave", element: <Leave/> },
        { path: "manageleave", element: <ManageLeave/> },
     
    ],
  },
];

export default routeLayout;
