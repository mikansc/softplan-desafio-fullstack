import React from "react";
import StyledInputGroup from "./TextInput.style";

const TextInput = (props) => {
  const { inputLabel, inputType, inputName, inputId } = props;
  return (
    <StyledInputGroup>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input type={inputType} name={inputName} id={inputId} />
    </StyledInputGroup>
  );
};

TextInput.defaultProps = {
  inputLabel: "label",
  inputType: "text",
  inputName: "input-name",
  inputId: "input-id",
};

export default TextInput;
