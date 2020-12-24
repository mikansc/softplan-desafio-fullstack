import React from "react";
import StyledContainer from "./Container.style";

const Container = ({ children, row }) => {
  return <StyledContainer row={row}>{children}</StyledContainer>;
};

export default Container;
