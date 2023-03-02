import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  canAccess = false,
  children,
  redirectTo = "/signin",
}: any) => {
  if (!canAccess) {
    return <Navigate to={redirectTo} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
