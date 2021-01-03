import React from "react";
import StyledButton from "./Button.style";

const Button = (props) => {
  const { children, submit, fullWidth, action, onClick } = props;
  const onClickHandler = () => (onClick ? onClick() : null);
  return (
    <StyledButton
      fullWidth={fullWidth}
      actionColor={action}
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
  action: "submit",
  onClick: null,
};

export default Button;
