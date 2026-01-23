import { Navigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
  const user = { isAuthenticated: true };
  return user;
};

export function ProtectedRoute() {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
