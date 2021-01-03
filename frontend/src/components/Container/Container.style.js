import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

export default StyledContainer;
