import React from "react";
import { StyledTable } from "./Table.style";

const Table = ({ children }) => (
  <div style={{ overflowX: "auto" }}>
    <StyledTable>{children}</StyledTable>
  </div>
);

export default Table;
