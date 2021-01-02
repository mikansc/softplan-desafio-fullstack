import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { children, submit, fullWidth, isCancel, onButtonClick } = props;
  const onClickHandler = () => {
    return onButtonClick ? onButtonClick() : null;
  };
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
