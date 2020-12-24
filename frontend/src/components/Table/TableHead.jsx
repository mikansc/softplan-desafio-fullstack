import React from "react";
import { StyledThead } from "./Table.style";

const TableHead = ({ headerArray }) => {
  return (
    <StyledThead>
      <tr>
        {headerArray.map((header) => {
          return <th>{header}</th>;
        })}
      </tr>
    </StyledThead>
  );
};

TableHead.defaultProps = {
  headerArray: ["Column A", "Column B", "Column C", "Column D"],
};

export default TableHead;
