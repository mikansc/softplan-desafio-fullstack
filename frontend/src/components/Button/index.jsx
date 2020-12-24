import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { children, submit, fullWidth, isCancel, onPress } = props;
  const onPressHandler = () => {
    onPress();
  };
  return (
    <StyledButton
      fullWidth={fullWidth}
      isCancel={isCancel}
      type={submit ? "submit" : "button"}
      onPress={onPressHandler}
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
