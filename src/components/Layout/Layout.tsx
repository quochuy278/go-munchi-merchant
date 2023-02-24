import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
export const Layout = ({ children }: any) => {
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
