import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: ${({ row }) => (row ? "space-between" : "center")};
  align-items: ${({ row }) => (row ? "center" : null)};
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export default StyledContainer;
