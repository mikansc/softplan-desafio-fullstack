import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StyledNav from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="logo">
        <h1 data-testid="projectLogo">SIPROJ - Softplan</h1>
      </div>
      <button type="button" className="icon">
        <ExitToAppIcon />
      </button>
    </StyledNav>
  );
};

export default Navbar;
