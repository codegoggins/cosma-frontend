import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("../Dashboard"));

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
];
