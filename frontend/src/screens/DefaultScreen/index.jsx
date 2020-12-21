import React from "react";
import Navbar from "../../components/Navbar";

const DefaultScreen = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default DefaultScreen;
