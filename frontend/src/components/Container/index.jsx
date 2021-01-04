import React from "react";
import StyledContainer from "./Container.style";

const Container = ({ children, row, halfWidth }) => (
  <StyledContainer row={row} halfWidth={halfWidth}>
    {children}
  </StyledContainer>
);

export default Container;
