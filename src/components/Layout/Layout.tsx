import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
export const Layout = ({ children }: any) => {
  return (
    <div className={styles.app__container}>
      <Header />
      <main >
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
