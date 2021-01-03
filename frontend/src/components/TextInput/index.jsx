import React from "react";
import StyledInputGroup from "./TextInput.style";

const TextInput = (props) => {
  const {
    inputLabel,
    inputType,
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
      {inputType === "textarea" ? (
        <textarea name={inputName} id={inputId}>
          {value}
        </textarea>
      ) : (
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          value={value}
          onChange={handleOnChange}
        />
      )}
    </StyledInputGroup>
  );
};

TextInput.defaultProps = {
  inputLabel: "label",
  inputType: "text",
  inputName: "input-name",
  inputId: "input-id",
  halfWidth: false,
};

export default TextInput;
