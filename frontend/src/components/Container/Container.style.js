import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => {
    return row ? "row" : "column";
  }};
`;

export default StyledContainer;
