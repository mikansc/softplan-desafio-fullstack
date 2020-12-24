import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 1em;
  background: var(--clr-bg-default);
  color: #fff;
  text-transform: uppercase;
  margin: 1.5em 0;
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    max-width: 240px;
  }
`;

export default StyledButton;
