import styled from "styled-components";

const ContentContainer = styled.section`
  width: 95%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5em;
  background-color: #fff;
  padding: 1em 1em 4em;
  border-radius: 3px;
`;

const ContentHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;

  h2 {
    display: block;
    font-size: 1.5em;
    color: var(--clr-text-main);
  }
`;

export { ContentContainer, ContentHeader };
