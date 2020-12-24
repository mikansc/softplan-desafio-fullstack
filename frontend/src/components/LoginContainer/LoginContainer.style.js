import styled from "styled-components";

const StyledLoginSection = styled.div`
  width: 100%;
  max-width: 520px;
  margin-top: 2em;
  padding: 2em 2em;
  color: var(--clr-text-main);

  h2 {
    font-size: 1.5em;
    margin-bottom: 1.5em;
    color: var(--clr-text-main);
  }
  form {
    width: 100%;
    margin: 1.5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 600px) {
    margin: 3em auto;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default StyledLoginSection;
