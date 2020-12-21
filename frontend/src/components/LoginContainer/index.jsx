import React from "react";
import StyledLoginSection from "./LoginContainer.style";

const LoginContainer = ({ children }) => {
  return <StyledLoginSection>{children}</StyledLoginSection>;
};

export default LoginContainer;
