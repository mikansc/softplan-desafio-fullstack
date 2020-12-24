import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { children, submit, fullWidth, isCancel, to } = props;
  return (
    <StyledButton
      fullWidth={fullWidth}
      isCancel={isCancel}
      type={submit ? "submit" : "button"}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  btnLabel: "Botão",
  fullWidth: false,
  isCancel: false,
};

export default Button;
