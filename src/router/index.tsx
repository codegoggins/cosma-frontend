import { createBrowserRouter } from "react-router-dom";

import type { RouteObject } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "../components/shared/NotFound";
import { authRoutes } from "../views/auth/router";
import { dashboardRoutes } from "../views/dashboard/router";
import { PublicLayout } from "../components/layout/PublicLayout";
import { publicRoutes } from "../views/public/router";

export const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [...dashboardRoutes],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
