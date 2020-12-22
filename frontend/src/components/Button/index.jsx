import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { btnLabel, submit, fullWidth, isCancel } = props;
  return (
    <StyledButton
      fullWidth={fullWidth}
      isCancel={isCancel}
      type={submit ? "submit" : "button"}
    >
      {btnLabel}
    </StyledButton>
  );
};

Button.defaultProps = {
  btnLabel: "Botão",
  fullWidth: false,
  isCancel: false,
};

export default Button;
