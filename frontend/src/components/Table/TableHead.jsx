import React from "react";
import { StyledThead } from "./Table.style";

const TableHead = ({ headerArray }) => (
  <StyledThead>
    <tr>
      {headerArray.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </StyledThead>
);

TableHead.defaultProps = {
  headerArray: ["Column A", "Column B", "Column C", "Column D"],
};

export default TableHead;
