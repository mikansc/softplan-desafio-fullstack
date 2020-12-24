import React from "react";
import { StyledTable } from "./Table.style";

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
