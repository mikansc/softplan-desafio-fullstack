import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Hidden } from "@material-ui/core";
import StyledHeader from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledHeader>
      <Hidden smUp>
        <button type="button" className="icon menu">
          <MenuIcon />
        </button>
      </Hidden>
      <div className="logo">
        <h1 data-testid="projectLogo">SIPROJ - Softplan</h1>
      </div>
      <button type="button" className="icon">
        <ExitToAppIcon />
      </button>
    </StyledHeader>
  );
};

export default Navbar;
