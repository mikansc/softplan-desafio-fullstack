/* eslint-disable arrow-body-style */
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 40px;
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  padding: 1em 2em;
  margin: 1em;
  background-color: ${({ isCancel }) =>
    isCancel ? "hsl(47, 89%, 37%)" : "hsl(191, 58%, 31%)"};
  border-radius: 5px;

  color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: blue;
  }
`;

export default StyledButton;
