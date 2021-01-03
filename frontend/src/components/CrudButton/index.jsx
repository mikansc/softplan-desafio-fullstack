import React from "react";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import StyledButton from "./CrudButton.styles";

const CrudButton = (props) => {
  const { action, onClick } = props;
  const onClickHandler = () => (onClick ? onClick() : null);
  return (
    <StyledButton actionColor={action} type="button" onClick={onClickHandler}>
      {action === "edit" ? <Edit /> : <Delete />}
    </StyledButton>
  );
};

CrudButton.defaultProps = {
  action: "edit",
  onClick: null,
};

export default CrudButton;
