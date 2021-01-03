import styled from "styled-components";

const defaultActionColors = {
  submit: { bg: "#216b7b", txt: "#FFF" },
  cancel: { bg: "#DFB657", txt: "#FFF " },
  delete: { bg: "#C74231", txt: "#FFF " },
};

const StyledButton = styled.button`
  width: 100%;
  padding: 1em;
  text-transform: uppercase;
  margin: 1.5em 0;
  border-radius: 3px;

  background-color: ${(props) => defaultActionColors[props.actionColor].bg};
  color: ${(props) => defaultActionColors[props.actionColor].txt};

  @media screen and (min-width: 600px) {
    max-width: 240px;
  }
`;

export default StyledButton;
