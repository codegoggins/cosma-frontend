import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Products = lazy(() => import("../products/Products"));
// const CategoryPage = lazy(() => import("../products/CategoryPage"));
// const ProductDetailPage = lazy(() => import("../products/ProductDetailPage"));
// const Cart = lazy(() => import("../cart/Cart"));
// const Checkout = lazy(() => import("../cart/Checkout"));
// const Profile = lazy(() => import("../profile/Profile"));
// const OrderDetail = lazy(() => import("../profile/OrderDetail"));

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  //   {
  //     path: "/products/category/:category",
  //     element: <CategoryPage />,
  //   },
  //   {
  //     path: "/products/:id",
  //     element: <ProductDetailPage />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  //   {
  //     path: "/checkout",
  //     element: <Checkout />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/profile/orders/:id",
  //     element: <OrderDetail />,
  //   },
];
