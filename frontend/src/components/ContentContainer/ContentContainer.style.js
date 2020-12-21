import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;

  align-self: "flex-start";

  h1,
  h2 {
    font-size: 1.5rem;
    color: #216b7b;
  }

  @media screen and (min-width: 425px) {
    width: 70%;
    min-width: 400px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 20px 10px;
  }
`;

export default StyledSection;
