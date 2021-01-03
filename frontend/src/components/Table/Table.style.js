import styled from "styled-components";

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
`;

export const StyledThead = styled.thead`
  width: 100%;
  background-color: #e0e0e0;
  text-align: left;

  th {
    padding: 0.75em 2em;
    border: 1px solid rgba(255, 255, 255, 0.5);
    text-transform: capitalize;
    color: "#484848";
    font-weight: bold;
  }
`;

export const StyledTr = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

export const StyledTd = styled.td`
  /* background-color: green; */
  padding: 0.5em 0.65em;

  @media screen and (min-width: 600px) {
    padding: 0.65em 2em;
  }
`;
