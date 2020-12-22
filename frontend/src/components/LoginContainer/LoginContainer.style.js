import styled from "styled-components";

const StyledLoginSection = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  align-self: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    color: #216b7b;
    margin-bottom: 2em;
  }

  @media screen and (min-width: 425px) {
    min-width: 400px;
    max-width: 520px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 20px 10px;
    form {
      width: 90%;
      margin: inherit auto;
    }
  }
`;

export default StyledLoginSection;
