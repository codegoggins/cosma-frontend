import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
