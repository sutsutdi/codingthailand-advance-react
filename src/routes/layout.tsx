import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Content from "../pages/layout/Content";

const routeDashboard: RouteObject[] = [
  {
    path: "/layout",
    element: <Layout />,
    children: [
        { path: "", element: <Content/> },
    ],
  },
];

export default routeDashboard;
