import React from "react";
import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="lg:p-10 md:p-6 p-4">{children}</div>;
    </>
  );
};

export default Layout;
