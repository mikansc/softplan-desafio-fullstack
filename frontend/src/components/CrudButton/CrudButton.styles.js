import styled from "styled-components";

const defaultActionColors = {
  edit: { bg: "#DFB657", txt: "#FFF" },
  delete: { bg: "#C74231", txt: "#FFF " },
};

const StyledButton = styled.button`
  padding: 0.35em;
  text-transform: uppercase;
  margin-left: 0.75em;
  border-radius: 5px;

  background-color: ${(props) => defaultActionColors[props.actionColor].bg};

  color: ${(props) => defaultActionColors[props.actionColor].txt};

  @media screen and (min-width: 600px) {
    margin-left: 0.5em;
  }
`;

export default StyledButton;
