import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { children, submit, fullWidth, isCancel, onClick } = props;
  const onClickHandler = () => (onClick ? onClick() : null);
  return (
    <StyledButton
      fullWidth={fullWidth}
      isCancel={isCancel}
      type={submit ? "submit" : "button"}
      onClick={onClickHandler}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  btnLabel: "Botão",
  fullWidth: false,
  isCancel: false,
  onClick: null,
};

export default Button;
