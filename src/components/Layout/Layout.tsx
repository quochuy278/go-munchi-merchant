import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
