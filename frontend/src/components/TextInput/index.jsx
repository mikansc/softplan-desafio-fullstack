import React from "react";
import StyledInputGroup from "./TextInput.style";

const TextInput = (props) => {
  const {
    inputLabel,
    type,
    inputName,
    inputId,
    value,
    onInput,
    halfWidth,
  } = props;

  const handleOnInput = (e) => {
    if (onInput) {
      onInput(e.target.value);
    }
  };

  return (
    <StyledInputGroup isHalfWidth={halfWidth}>
      <label htmlFor={inputId}>{inputLabel}</label>
      {type === "textarea" ? (
        <textarea name={inputName} id={inputId}>
          {value}
        </textarea>
      ) : (
        <input
          type={type}
          name={inputName}
          id={inputId}
          value={value}
          onInput={handleOnInput}
        />
      )}
    </StyledInputGroup>
  );
};

TextInput.defaultProps = {
  inputLabel: "label",
  type: "text",
  inputName: "input-name",
  inputId: "input-id",
  halfWidth: false,
};

export default TextInput;
