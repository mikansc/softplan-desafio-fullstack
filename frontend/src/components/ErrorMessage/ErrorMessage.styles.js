import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75em;
  background-color: #ffbbb2;

  border: 1px solid #9c2617;
  border-radius: 5px;
  color: #9c2617;

  span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 0.5em;
  }

  @media screen and (min-width: 600px) {
  }
`;

export default StyledDiv;
