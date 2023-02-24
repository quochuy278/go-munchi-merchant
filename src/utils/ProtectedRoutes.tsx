import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ isAuthenticated, children }: any) => {
    console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to={"/signin"} replace={true}/>;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
