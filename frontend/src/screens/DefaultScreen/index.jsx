import React from "react";
import Navbar from "../../components/Navbar";

const DefaultScreen = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default DefaultScreen;
