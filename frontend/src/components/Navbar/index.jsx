import React from "react";
import { useLocation } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import StyledNav from "./Navbar.style";
import { logout } from "../../store/userDomain/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onClickHandler = () => {
    dispatch(logout());
  };

  return (
    <StyledNav>
      <div className="logo">
        <h1 data-testid="projectLogo">SIPROJ - Softplan</h1>
      </div>
      {location.pathname === "/" ? null : (
        <button type="button" className="icon" onClick={onClickHandler}>
          <ExitToAppIcon />
        </button>
      )}
    </StyledNav>
  );
};

export default Navbar;
