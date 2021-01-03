import React from "react";
import StyledInputGroup from "./SelectInput.style";

const SelectInput = (props) => {
  const {
    inputLabel,
    children,
    inputName,
    inputId,
    value,
    onChange,
    halfWidth,
  } = props;

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledInputGroup isHalfWidth={halfWidth}>
      <label htmlFor={inputId}>{inputLabel}</label>
      <select
        name={inputName}
        id={inputId}
        value={value}
        onChange={handleOnChange}
      >
        {children}
      </select>
    </StyledInputGroup>
  );
};

SelectInput.defaultProps = {
  inputLabel: "label",
  inputName: "input-name",
  inputId: "input-id",
  halfWidth: false,
};

export default SelectInput;
