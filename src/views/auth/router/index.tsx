import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import VendorRegister from "../VendorRegister";

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
  {
    path: "/vendor/register",
    element: <VendorRegister />,
  },
];
