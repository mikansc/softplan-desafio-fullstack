import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import StyledDiv from "./ErrorMessage.styles";

const ErrorMessage = ({ message }) => (
  <StyledDiv>
    <ErrorIcon />
    <span>{message}</span>
  </StyledDiv>
);

export default ErrorMessage;
