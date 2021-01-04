import React from "react";
import StyledInputGroup from "./CheckboxInput.style";

const CheckboxInput = (props) => {
  const { inputLabel, checked, name, id, value, onChange } = props;

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledInputGroup>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{inputLabel}</label>
    </StyledInputGroup>
  );
};

CheckboxInput.defaultProps = {
  inputLabel: "label",
  type: "text",
  name: "input-name",
  id: "input-id",
};

export default CheckboxInput;
