import React from "react";
import Navbar from "../Navbar";
import StyledMain from "./DefaultScreen.style";

const DefaultScreen = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default DefaultScreen;
