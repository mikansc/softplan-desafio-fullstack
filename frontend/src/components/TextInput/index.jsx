import React from "react";
import StyledInputGroup from "./TextInput.style";

const TextInput = (props) => {
  const { inputLabel, inputType, inputName, inputId, value, onChange } = props;

  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <StyledInputGroup>
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
};

export default TextInput;
