import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import { selectSession } from "../../store/slices/session";
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";



const withChecking = (Component: React.FC) => () => {
  const { businessId } = useAppSelector(selectSession);

  if (!businessId) {
    return <Navigate to="/business" replace />;
  }

  return <Component />;
}



const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main className={styles.main__content}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export const LayoutWithChecking = withChecking(Layout);
