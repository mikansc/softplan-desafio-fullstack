import React from "react";
import StyledSection from "./ContentContainer.style";

const ContentContainer = (props) => {
  const { isLoginScreen, children } = props;

  return <StyledSection isLogin={isLoginScreen}>{children}</StyledSection>;
};

export default ContentContainer;
