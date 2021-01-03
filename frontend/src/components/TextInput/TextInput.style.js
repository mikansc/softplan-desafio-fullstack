import styled from "styled-components";

const StyledInputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1em;
  padding-right: 1em;

  @media screen and (min-width: 600px) {
    width: ${({ isHalfWidth }) => (isHalfWidth ? "50%" : "100%")};
  }

  label {
    color: #216b7b;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 0.75em 1em;
  }
  textarea {
    min-width: 100%;
  }
`;

export default StyledInputGroup;
